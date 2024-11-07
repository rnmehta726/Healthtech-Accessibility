from requests.exceptions import HTTPError
from flask import Flask, request, jsonify
import json
from firebase import firestore
import firebase
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

with open("config.json", 'r') as f:
    config = json.load(f)

firebaseApp = firebase.initialize_app(config)
auth = firebaseApp.auth()
firestore = firebaseApp.firestore()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    try:
        auth.sign_in_with_email_and_password(data["email"], data["password"])
        return jsonify({ "status": "success","msg": "Successfully signed in user"}), 200
    except HTTPError as e:
        return jsonify({ "status": "failed","msg": "Unable to sign in"}), 400

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    try:
        auth.create_user_with_email_and_password(data["email"], data["password"])
        return jsonify({ "status": "success","msg": "Successfully created user"}), 200
    except HTTPError as e:
        return jsonify({ "status": "failed","msg": "Unable to create user"}), 400


if __name__ == '__main__':
    app.run(port=3000)