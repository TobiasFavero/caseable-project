from flask import request
from models.phone_case import PhoneCaseSchema
from flask import Blueprint, request
from routes.decorators.validate_json import validate_json
from routes.decorators.validate_required_field import validate_required_field
from services.phone_cases_service import PhoneCasesService
from injector import inject

cases_bp = Blueprint("cases", __name__, url_prefix="/api/cases")

@inject
@cases_bp.route("", methods=["POST"])
@validate_json
def post(case_schema: PhoneCaseSchema, cases_service: PhoneCasesService):
    case_to_create = case_schema.load(request.json)
    id = cases_service.create_case(case_to_create)
    
    return { "message": f"Case created.", "id": id }, 201

@inject
@cases_bp.route("", methods=["PUT"])
@validate_json
@validate_required_field("id")
def put(case_schema: PhoneCaseSchema, cases_service: PhoneCasesService):
    case_to_update = case_schema.load(request.json, partial=True)
    cases_service.update_case(case_to_update)
    
    return { "message": "Case updated." }, 200

@inject
@cases_bp.route("", methods=["DELETE"])
@validate_json
@validate_required_field("id")
def delete(case_schema: PhoneCaseSchema, cases_service: PhoneCasesService):
    case_to_delete = case_schema.load(request.json, partial=True)
    cases_service.delete_case(case_to_delete)

    return { "message": "Case deleted." }, 200

