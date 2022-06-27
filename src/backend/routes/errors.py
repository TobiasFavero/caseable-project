import traceback

from flask import Blueprint, jsonify
from marshmallow import ValidationError
from werkzeug.exceptions import NotFound

from errors.database_error import DatabaseError

error_bp = Blueprint("errors", __name__)

@error_bp.app_errorhandler(NotFound)
def handle_not_found(error):
    print(traceback.format_exc())
    return { "message": "This resource is not available" }, 404


@error_bp.app_errorhandler(ValidationError)
def handle_invalid_data(error):
    print(traceback.format_exc())
    return { "message": error.messages }, 400

@error_bp.app_errorhandler(DatabaseError)
def handle_invalid_data(error):
    print(traceback.format_exc())
    return { "message": error.message }, 500


@error_bp.app_errorhandler(Exception)
def handle_generic_exception(error):
    print(traceback.format_exc())
    return { "message": "Unknown error occured" }, 500