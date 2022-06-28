from os import environ
from flask import Flask
from config.config import get_config_by_env
from routes.errors import error_bp 
from routes.phone_cases import cases_bp
from routes.products import products_bp
from services.environment_service import EnvironmentService
from flask_injector import FlaskInjector
from utils.dependencies_injector import configure
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    CORS(app)

    #Configurations
    config = get_config_by_env(environ.get("FLASK_ENV"))
    app.config.from_object(config)
    EnvironmentService().initialize(app.config)

    #Blueprints
    app.register_blueprint(error_bp)
    app.register_blueprint(cases_bp)
    app.register_blueprint(products_bp)

    #Dependencies Injector
    FlaskInjector(app=app, modules=[configure])

    return app
