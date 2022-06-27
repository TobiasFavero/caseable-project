from typing import Dict
from models.product_filters import ProductFilters
from models.product import Product

class MongoOperationsHelper:
    def create_filters(self, filters: ProductFilters) -> Dict:
        if filters is None: 
            return {}
            
        return {
            "id": filters.id
        }
    
    def create_update_request_values(self, item_to_update: Product) -> Dict:
        return {
            "$set": item_to_update
        }