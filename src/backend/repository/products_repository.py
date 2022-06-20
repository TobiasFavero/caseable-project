from typing import List
from models.case_filters import CaseFilters
from models.product import Product
from repository.mongo_operations_helper import MongoOperationsHelper
from repository.repository import Repository
from .mongo_utils import create_connection

class ProductsRepository(Repository):
    def __init__(self):
        self.products_db = create_connection()
        self.mongo_operations_helper = MongoOperationsHelper()

    def create(self, item: Product) -> Product:
        insert_result = self.products_db.products.insert_one(item)

        return insert_result.acknowledged

    def delete(self, item: Product) -> Product:
        filters = self.mongo_operations_helper.create_filters(CaseFilters(item["id"]))
        delete_result = self.products_db.products.delete_one(filters)

        return delete_result.deleted_count

    def update(self, item: Product) -> Product:
        filters = self.mongo_operations_helper.create_filters(CaseFilters(item["id"]))
        new_values = self.mongo_operations_helper.create_update_request_values(item)
        update_result = self.products_db.products.update_one(filters, new_values)

        return update_result.modified_count

    def get(self, filters = None) -> List[Product]:
        mongo_filters = self.mongo_operations_helper.create_filters(filters)
        products_cursor = self.products_db.products.find(mongo_filters)
        products = [product for product in products_cursor]

        return products