FROM alpine:latest

WORKDIR /app
COPY ./dist/appstack /app/appstack
COPY ./dist/app /app/app

EXPOSE 8080
ENV PORT=8080

CMD ["/app/appstack", "serve", "--static-dir", "/app/app", "--static-route", "/"]
