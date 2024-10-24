from flask import Flask

app = Flask(__name__)

# Import rute setelah inisialisasi Flask
from app import routes
