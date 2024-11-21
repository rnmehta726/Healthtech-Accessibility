import time
from requests.exceptions import HTTPError
from flask import Flask, request, jsonify
import json
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
        user = auth.sign_in_with_email_and_password(data["email"], data["password"])
        return jsonify({ "status": "success","msg": "Successfully signed in user", "idToken": user["email"]}), 200
    except HTTPError as e:
        return jsonify({ "status": "failed","msg": "Unable to sign in"}), 400

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    try:
        user = auth.create_user_with_email_and_password(data["email"], data["password"])
        firestore.collection("personas").document(user["email"]).set({"personaList":{}})
        return jsonify({ "status": "success","msg": "Successfully created user"}), 200
    except HTTPError as e:
        return jsonify({ "status": "failed","msg": "Unable to create user"}), 400

@app.route("/<userId>/createPersona", methods=['POST'])
def createPersona(userId):
    data = request.json
    try:
        persona_list = list(firestore.collection("personas").document(userId).get({"personaList"}).values())
        updated_list = persona_list[0]
        updated_list[data["personaName"]] = [time.time()]+data["phrases"]
        firestore.collection("personas").document(userId).update({"personaList": updated_list})
        return jsonify({ "status": "success","msg": "Successfully fetched personas"}), 200
    except HTTPError as e:
        return jsonify({ "status": "failed","msg": "Unable to create persona"}), 400

@app.route("/<userId>/fetchPersona", methods=['GET'])
def fetchPersonas(userId):
    try:
        personas = list(firestore.collection("personas").document(userId).get({"personaList"}).values())[0]
        return jsonify({ "status": "success","msg": "Successfully fetched personas", "personas": personas}), 200
    except HTTPError as e:
        return jsonify({ "status": "failed","msg": "Unable to fetch personas"}), 400


if __name__ == '__main__':
    app.run(port=3000)