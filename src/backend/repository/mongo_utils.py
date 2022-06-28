from gridfs import Database
from pymongo import MongoClient
from services.environment_service import EnvironmentService
import certifi

class MongoUtils:
    def create_connection(self) -> Database:
        connection_string = EnvironmentService().get_one("DATABASE_URI")
        client = MongoClient(connection_string, tlsCAFile=certifi.where())
        return client.products
    
    #only used in testing
    def drop_products_collection(self):
        connection = self.create_connection()
        connection.products.drop()