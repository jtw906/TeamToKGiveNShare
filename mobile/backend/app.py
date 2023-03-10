# venv\Scripts\activate
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import json_util

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

client = MongoClient('mongodb://localhost:27017/')
db = client['capstone']
users = db['users']

@app.route('/', methods=['GET'])
def index():
    return jsonify({'message': 'Hello, World!'})

@app.route('/add', methods=['POST'])
def add():
    name = request.json['name']
    age = request.json['age']
    data = {"name": name, "age": age}
    users.insert_one(data)
    return jsonify({"msg": "POST success"})

@app.route('/get', methods=['GET'])
def get():
    data = users.find()
    result = []
    for document in data:
        document['_id'] = str(document['_id'])
        result.append(document)
    return jsonify(result)

@app.route('/get/<name>', methods=['GET'])
def get_name(name):
    data = users.find({"name": name})
    result = ""
    for document in data:
        result = document['age']
    return jsonify({"msg": "The age of " + name + " is " + result})

if __name__ == '__main__':
    app.run(host='172.20.10.2', port=3000, debug=True)
    # ssl_context='adhoc'