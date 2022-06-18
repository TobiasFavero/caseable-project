from flask import Flask
from routes.errors import error_bp 
from routes.products import products_bp

def create_app():
    app = Flask(__name__)

    app.register_blueprint(error_bp)
    app.register_blueprint(products_bp)

    return app
