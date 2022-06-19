from flask import Flask
from flask import request, make_response, jsonify
from voicevox import generate_wav
from flask_cors import CORS
import os
import NLP

port = int(os.environ['PORT'])
app = Flask(__name__)
CORS(app) #Cross Origin Resource Sharing

@app.route("/", methods=['POST'])
def index():
	data = request.get_json()
	text = data['post_text']
	print(text)
	# generate_wav(text)
	result = NLP.gptTransformer(text)
	response = {"result": result}
	return make_response(jsonify(response))


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=port)