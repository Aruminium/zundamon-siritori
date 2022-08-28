FROM python:3.9.5-slim-buster

WORKDIR /Python
COPY . /Python

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python", "server.py"]