from flask import Flask
from flask import request, make_response, jsonify, Response, send_file
from voicevox import generate_wav
from flask_cors import CORS
import os
from siritori import Siritori

app = Flask(__name__)
CORS(app)
siritori = Siritori("output.txt")

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