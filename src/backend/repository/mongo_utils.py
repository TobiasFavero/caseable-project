from gridfs import Database
from pymongo import MongoClient
import os

def create_connection() -> Database:
    client = MongoClient(os.getenv('MONGO_CONNECTION_STRING'))
    return client.products