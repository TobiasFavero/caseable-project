from flask import request
from models.case import CaseSchema
from flask import Blueprint, request, jsonify
from routes.decorators.validate_json import validate_json
from routes.decorators.validate_required_field import validate_required_field
from services.products_service import ProductsService

products_bp = Blueprint("products", __name__, url_prefix="/api/products")
case_schema = CaseSchema()
products_service = ProductsService()

@products_bp.route("", methods=["GET"])
def get():
    products = products_service.get_products()
    products_str = case_schema.dump(products, many=True)

    return jsonify(products_str), 200

@products_bp.route("", methods=["POST"])
@validate_json
def post():
    product_to_create = case_schema.load(request.json)
    id = products_service.create_product(product_to_create)
    
    return { "message": f"Product created.", "id": id }, 201

@products_bp.route("", methods=["PUT"])
@validate_json
@validate_required_field("id")
def put():
    product_to_update = case_schema.load(request.json, partial=True)
    products_service.update_product(product_to_update)
    
    return { "message": "Product updated." }, 200

@products_bp.route("", methods=["DELETE"])
@validate_json
@validate_required_field("id")
def delete():
    product_to_delete = case_schema.load(request.json, partial=True)
    products_service.delete_product(product_to_delete)

    return { "message": "Product deleted." }, 200

