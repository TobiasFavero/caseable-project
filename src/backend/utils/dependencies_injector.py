from flask import request
from models.case import CaseSchema
from repository.mongo_operations_helper import MongoOperationsHelper
from repository.mongo_utils import MongoUtils
from repository.products_repository import ProductsRepository
from repository.repository import Repository
from services.products_service import ProductsService
from injector import singleton

def configure(binder):
    binder.bind(MongoUtils, to=MongoUtils, scope=singleton)
    binder.bind(MongoOperationsHelper, to=MongoOperationsHelper, scope=singleton)
    binder.bind(Repository, to=ProductsRepository, scope=singleton)
    binder.bind(ProductsService, to=ProductsService, scope=singleton)
    binder.bind(CaseSchema, to=CaseSchema, scope=singleton)