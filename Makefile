u:
	docker compose up -d

d:
	docker compose down

b:
	docker compose build

r:
	docker compose restart

voicevox: voicevox
	docker run --rm -it -p '127.0.0.1:50021:50021' voicevox/voicevox_engine:cpu-ubuntu20.04-latest
