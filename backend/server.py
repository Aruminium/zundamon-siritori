from flask import Flask
from flask import request, make_response, jsonify, Response, send_file
from voicevox import generate_wav
from flask_cors import CORS
import os
from siritori import Siritori
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import desc
import json

USER = os.environ["POSTGRES_USER"]
PASSWORD = os.environ["POSTGRES_PASSWORD"]
SERVER = os.environ["POSTGRES_SERVER"]
DB_NAME = os.environ["POSTGRES_DB"]
PORT = os.environ["POSTGRES_PORT"]

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = f'postgresql+psycopg2://{USER}:{PASSWORD}@{SERVER}:{PORT}/{DB_NAME}'
CORS(app)
db = SQLAlchemy(app)
siritori = Siritori("output.txt")

class Ranking(db.Model):
  __tablename__ = "ranking"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(32))
  continuation_count = db.Column(db.Integer, nullable=False)

  def __init__(self, name, continuation_count) -> None:
    if name:
      self.name = name
    else:
      self.name = "anonymous"
    self.continuation_count = continuation_count

@app.route("/ranking", methods=["GET"])
def get_ranking():
  res = []
  rankings = Ranking.query.order_by(desc(Ranking.continuation_count)).all()
  for ranking in rankings:
    res.append({"name": ranking.name, "continuation_count": ranking.continuation_count})
  return res

@app.route("/ranking", methods=["POST"])
def post_ranking():
  data = request.get_json()
  name = data["name"]
  continuation_count = data["continuation_count"]
  ranking = Ranking(name, continuation_count)
  db.session.add(ranking)
  db.session.commit()
  return Response(status=200)

@app.route("/siritori", methods=['POST'])
def index():
	global siritori
	data = request.get_json()
	text = data["post_text"]
	next_noun, col = siritori.return_nextnoun(text)
	if col:
		siritori = Siritori("output.txt")
		return Response(response="あなたの負けなのだ", status=201)
	generate_wav(next_noun+"なのだ")
	return Response(response=next_noun, status=200)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=5000)