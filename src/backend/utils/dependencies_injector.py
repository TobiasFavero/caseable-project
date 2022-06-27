from flask import request
from models.phone_case import PhoneCaseSchema
from models.product import ProductSchema
from repository.mongo_operations_helper import MongoOperationsHelper
from repository.mongo_utils import MongoUtils
from repository.products_repository import ProductsRepository
from repository.repository import Repository
from services.phone_cases_service import PhoneCasesService
from injector import singleton

from services.products_service import ProductsService

def configure(binder):
    binder.bind(MongoUtils, to=MongoUtils, scope=singleton)
    binder.bind(MongoOperationsHelper, to=MongoOperationsHelper, scope=singleton)
    binder.bind(Repository, to=ProductsRepository, scope=singleton)
    binder.bind(PhoneCasesService, to=PhoneCasesService, scope=singleton)
    binder.bind(PhoneCaseSchema, to=PhoneCaseSchema, scope=singleton)
    binder.bind(ProductsService, to=ProductsService, scope=singleton)