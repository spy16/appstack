#!/bin/sh

cd /app

./appstack serve --addr="0.0.0.0:${PORT}" \
    --log-level=$LOG_LEVEL \
    --log-format=$LOG_FORMAT \
    --static-dir="/app/app" \
    --static-route="/"
