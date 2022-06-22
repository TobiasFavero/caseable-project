from flask import request
from models.case import CaseSchema
from repository.mongo_operations_helper import MongoOperationsHelper
from repository.mongo_utils import MongoUtils
from repository.products_repository import ProductsRepository
from repository.repository import Repository
from services.cases_service import CasesService
from injector import singleton

def configure(binder):
    binder.bind(MongoUtils, to=MongoUtils, scope=singleton)
    binder.bind(MongoOperationsHelper, to=MongoOperationsHelper, scope=singleton)
    binder.bind(Repository, to=ProductsRepository, scope=singleton)
    binder.bind(CasesService, to=CasesService, scope=singleton)
    binder.bind(CaseSchema, to=CaseSchema, scope=singleton)