FROM python:3.9.5-slim-buster

RUN pip install --upgrade pip
RUN pip install flask==2.0.1

WORKDIR /app

ENV PORT 80

COPY ./ /app

RUN pip install -r requirements.txt


CMD ["python", "server.py"]