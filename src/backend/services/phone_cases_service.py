from typing import List
from marshmallow import ValidationError
from models.phone_case import PhoneCase
from models.product_filters import ProductFilters
from models.product import Product
from repository.repository import Repository
from errors.database_error import DatabaseError
from injector import inject
from services.products_handler_service import ProductsHandlerService

class PhoneCasesService(ProductsHandlerService):
    @inject
    def __init__(self, products_repository: Repository):
        self.repository: Repository = products_repository

    def create_case(self, case_to_create: Product) -> str:
        filters = ProductFilters(case_to_create["id"])
        existing_product = self.repository.get(filters)

        if len(existing_product):
            raise ValidationError("The product already exists.")

        created = self.repository.create(case_to_create)

        if not created:
            raise DatabaseError(message=f"Couldn't create the product with the id: {case_to_create['id']}")

        return case_to_create["id"]

    def update_case(self, case_to_update) -> Product:
        updated_count = self.repository.update(case_to_update)

        if not updated_count:
            raise DatabaseError(message="Couldn't update the case. Check if the case Id exists.")

        return case_to_update

    def delete_case(self, case_to_delete) -> int:
        deleted_count = self.repository.delete(case_to_delete)

        if not deleted_count:
            raise DatabaseError(message=f"Couldn't delete the case with the Id: {case_to_delete['id']}. Check if the case Id exists.")

        return deleted_count