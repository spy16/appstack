FROM alpine:latest

WORKDIR /app
COPY ./run_app.sh /app/
RUN chmod +x /app/run_app.sh

COPY ./dist/* /app/

EXPOSE 8080
ENV ADDR=:8080
ENV LOG_LEVEL=info
ENV LOG_FORMAT=json

CMD ["/bin/sh", "-c", "/app/run_app.sh"]
