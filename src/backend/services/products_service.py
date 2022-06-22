from typing import List
from marshmallow import ValidationError
from models.case_filters import CaseFilters
from models.product import Product
from repository.products_repository import ProductsRepository
from repository.repository import Repository
from errors.database_error import DatabaseError
from injector import inject

class ProductsService:
    @inject
    def __init__(self, products_repository: Repository):
        self.repository: Repository = products_repository

    def create_product(self, product_to_create: Product) -> str:
        filters = CaseFilters(product_to_create["id"])
        existing_product = self.repository.get(filters)

        if len(existing_product):
            raise ValidationError("The product already exists.")

        created = self.repository.create(product_to_create)

        if not created:
            raise DatabaseError(f"Couldn't create the product with the id: {product_to_create['id']}")

        return product_to_create["id"]

    def get_products(self) -> List[Product]:
        products = self.repository.get()

        return products

    def update_product(self, product_to_update) -> Product:
        updated_count = self.repository.update(product_to_update)

        if not updated_count:
            raise DatabaseError("Couldn't update the product. Check if the product Id exists.")

        return product_to_update

    def delete_product(self, product_to_delete) -> int:
        deleted_count = self.repository.delete(product_to_delete)

        if not deleted_count:
            raise DatabaseError(f"Couldn't delete the product with the Id: {product_to_delete['id']}")

        return deleted_count