from typing import List
from marshmallow import ValidationError
from models.product import Product
from models.product_filters import ProductFilters
from repository.repository import Repository
from injector import inject

class ProductsService:
    @inject
    def __init__(self, products_repository: Repository):
        self.repository: Repository = products_repository

    def get_products(self) -> List[Product]:
        products = self.repository.get()

        return products

    def get_product_by_id(self, id: str) -> Product:
        filters = ProductFilters(id)
        existing_products = self.repository.get(filters)

        if not len(existing_products):
            raise ValidationError(f"The product with the id: {id} does not exist.")

        return existing_products[0]
