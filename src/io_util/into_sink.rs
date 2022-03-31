// Copyright 2022 Datafuse Labs.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use std::pin::Pin;
use std::task::Context;
use std::task::Poll;

use anyhow::anyhow;
use bytes::Buf;
use bytes::Bytes;
use futures::ready;
use futures::AsyncWrite;
use futures::Sink;
use pin_project::pin_project;

use crate::error::Error;
use crate::error::Result;

pub fn into_sink<W: AsyncWrite + Send + Unpin>(w: W) -> IntoSink<W> {
    IntoSink {
        w,
        buf: bytes::Bytes::new(),
    }
}

#[pin_project]
pub struct IntoSink<W: AsyncWrite + Send + Unpin> {
    #[pin]
    w: W,
    buf: bytes::Bytes,
}

impl<W> IntoSink<W>
where
    W: AsyncWrite + Send + Unpin,
{
    pub fn into_inner(self) -> W {
        self.w
    }

    fn poll_flush_buffer(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Result<()>> {
        let mut this = self.project();

        loop {
            if this.buf.is_empty() {
                break;
            }
            let n = ready!(this.w.as_mut().poll_write(cx, this.buf))
                .map_err(|e| Error::Unexpected(anyhow!(e)))?;
            this.buf.advance(n);
        }

        Poll::Ready(Ok(()))
    }
}

impl<W> Sink<Bytes> for IntoSink<W>
where
    W: AsyncWrite + Send + Unpin,
{
    type Error = Error;

    fn poll_ready(
        mut self: Pin<&mut Self>,
        cx: &mut Context<'_>,
    ) -> Poll<std::result::Result<(), Self::Error>> {
        ready!(self.as_mut().poll_flush_buffer(cx))?;
        Poll::Ready(Ok(()))
    }

    fn start_send(mut self: Pin<&mut Self>, item: Bytes) -> std::result::Result<(), Self::Error> {
        debug_assert!(self.buf.is_empty());
        self.buf = item;
        Ok(())
    }

    fn poll_flush(
        mut self: Pin<&mut Self>,
        cx: &mut Context<'_>,
    ) -> Poll<std::result::Result<(), Self::Error>> {
        ready!(self.as_mut().poll_flush_buffer(cx))?;

        self.project()
            .w
            .poll_flush(cx)
            .map_err(|e| Error::Unexpected(anyhow!(e)))
    }

    fn poll_close(
        mut self: Pin<&mut Self>,
        cx: &mut Context<'_>,
    ) -> Poll<std::result::Result<(), Self::Error>> {
        ready!(self.as_mut().poll_flush_buffer(cx))?;

        self.project()
            .w
            .poll_close(cx)
            .map_err(|e| Error::Unexpected(anyhow!(e)))
    }
}

#[cfg(test)]
mod tests {
    use futures::SinkExt;
    use rand::rngs::ThreadRng;
    use rand::Rng;
    use rand::RngCore;

    use super::*;

    #[tokio::test]
    async fn test_into_sink() {
        let mut rng = ThreadRng::default();
        // Generate size between 1B..16MB.
        let size = rng.gen_range(1..16 * 1024 * 1024);
        let mut content = vec![0; size];
        rng.fill_bytes(&mut content);

        let bs = Vec::new();
        let mut s = into_sink(bs);
        s.feed(Bytes::from(content.clone()))
            .await
            .expect("feed must success");
        s.close().await.expect("close must success");

        assert_eq!(s.into_inner(), content)
    }
}