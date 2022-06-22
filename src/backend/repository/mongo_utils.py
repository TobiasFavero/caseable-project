from gridfs import Database
from pymongo import MongoClient
from services.environment_service import EnvironmentService

class MongoUtils:
    def create_connection(self) -> Database:
        connection_string = EnvironmentService().get_one("DATABASE_URI")
        client = MongoClient(connection_string)
        return client.products