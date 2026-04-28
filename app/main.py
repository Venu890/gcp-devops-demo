import os
from flask import Flask, jsonify

app = Flask(__name__)

APP_ENV   = os.environ.get("APP_ENV", "dev")
APP_COLOR = os.environ.get("APP_COLOR", "blue")
DB_PASS   = os.environ.get("DB_PASSWORD", "")

@app.route("/")
def home():
    return jsonify({
        "message": "GCP DevOps Demo is running!",
        "env":     APP_ENV,
        "color":   APP_COLOR,
        "db_pass_set": bool(DB_PASS)
    })

@app.route("/health")
def health():
    return jsonify({"status": "ok"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)