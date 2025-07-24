from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from sqlalchemy import text
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)   # Allows requests from React (:3000)

load_dotenv()

DB_USER = os.getenv("DATABASE_USER")
DB_PASS = os.getenv("DATABASE_PASS")
DB_HOST = os.getenv("DATABASE_HOST")
DB_NAME = os.getenv("DATABASE_NAME")

app.config['SQLALCHEMY_DATABASE_URI'] = (f"mysql+pymysql://{DB_USER}:{DB_PASS}@{DB_HOST}/{DB_NAME}")
db = SQLAlchemy(app)

# Root route
@app.route("/")
def home():
    return "Work in Progress"

# API Route to connect w React
@app.route("/api/testmessage")
def get_message():
    return jsonify({"message": "Flask backend working!"})

# API to check DB connection
@app.route("/api/check-db")
def check_db():
    try:
        db.session.execute(text("SELECT 1"))
        return jsonify({"db": "connected"})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)