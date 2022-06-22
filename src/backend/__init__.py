from os import environ
from flask import Flask
from config.config import get_config
from routes.errors import error_bp 
from routes.products import products_bp
from services.environment_service import EnvironmentService
from flask_injector import FlaskInjector
from utils.dependencies_injector import configure

def create_app():
    app = Flask(__name__)

    #Configurations
    config = get_config(environ.get("FLASK_ENV"))
    app.config.from_object(config)
    EnvironmentService().initialize(app.config)

    #Blueprints
    app.register_blueprint(error_bp)
    app.register_blueprint(products_bp)

    #Dependencies Injector
    FlaskInjector(app=app, modules=[configure])

    return app
