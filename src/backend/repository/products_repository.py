from typing import List
from models.product_filters import ProductFilters
from models.product import Product
from repository.mongo_operations_helper import MongoOperationsHelper
from repository.repository import Repository
from .mongo_utils import MongoUtils
from injector import inject

class ProductsRepository(Repository):
    @inject
    def __init__(self, mongo_utils: MongoUtils, mongo_operations_helper: MongoOperationsHelper):
        self.products_db = mongo_utils.create_connection()
        self.mongo_operations_helper = mongo_operations_helper

    def create(self, item: Product) -> Product:
        insert_result = self.products_db.products.insert_one(item)

        return insert_result.acknowledged

    def delete(self, item: Product) -> Product:
        filters = self.mongo_operations_helper.create_filters(ProductFilters(item["id"]))
        delete_result = self.products_db.products.delete_one(filters)

        return delete_result.deleted_count

    def update(self, item: Product) -> Product:
        filters = self.mongo_operations_helper.create_filters(ProductFilters(item["id"]))
        new_values = self.mongo_operations_helper.create_update_request_values(item)
        update_result = self.products_db.products.update_one(filters, new_values)

        return update_result.modified_count

    def get(self, filters = None) -> List[Product]:
        mongo_filters = self.mongo_operations_helper.create_filters(filters)
        products_cursor = self.products_db.products.find(mongo_filters, {"_id": False})
        products = [product for product in products_cursor]

        return products