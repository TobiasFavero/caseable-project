from flask import request
from models.case import CaseSchema
from json import loads
from flask import Blueprint, request, jsonify

products_bp = Blueprint("products", __name__, url_prefix="/products")
case_schema = CaseSchema(many=True)

@products_bp.route("", methods=["GET"])
def get():
    return jsonify(case_schema.load(loads(request.data)))

@products_bp.route("", methods=["POST"])
def post():
    pass

@products_bp.route("", methods=["PUT"])
def put():
    pass

@products_bp.route("", methods=["DELETE"])
def delete():
    pass