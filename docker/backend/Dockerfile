FROM python:3.9-buster as builder
ENV PYTHONUNBUFFERED=1
COPY /docker/backend/requirements.txt /
RUN /usr/local/bin/python -m pip install --upgrade pip \
  && pip install -r requirements.txt --no-cache-dir

FROM python:3.9-slim-buster
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY /backend/ .
COPY --from=builder /usr/local/lib/python3.9/site-packages /usr/local/lib/python3.9/site-packages/
USER 1001
CMD ["python", "server.py"]