from flask import Blueprint, jsonify
from injector import inject
from services.products_service import ProductsService

products_bp = Blueprint("products", __name__, url_prefix="/api/products")

@inject
@products_bp.route("", methods=["GET"])
def get(products_service: ProductsService):
    products = products_service.get_products()

    return jsonify(products), 200

@inject
@products_bp.route("/<int:id>", methods=["GET"])
def get_by_id(products_service: ProductsService, id: int):
    product = products_service.get_product_by_id(id)

    return jsonify(product), 200


