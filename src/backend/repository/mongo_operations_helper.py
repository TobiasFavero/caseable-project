from typing import Dict
from models.case_filters import CaseFilters
from models.product import Product

class MongoOperationsHelper:
    def create_filters(self, filters: CaseFilters) -> Dict:
        if filters is None: 
            return {}
            
        return {
            "id": filters.id
        }
    
    def create_update_request_values(self, item_to_update: Product) -> Dict:
        return {
            "$set": item_to_update
        }