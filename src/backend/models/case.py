from models.dimensions import Dimensions, DimensionsSchema
from models.product import Product, ProductSchema
from marshmallow import fields, validate
from config.fields import CaseFieldsValidValues

valid_values = CaseFieldsValidValues()

class Case(Product):
    def __init__(self, color, device, dimensions, protection_level, id, price, name, description, image_link):
        super().__init__(id, price, name, description, image_link, 'case')

        self.color: str = color
        self.device: str = device
        self.dimensions: Dimensions = dimensions
        self.protection_level: str = protection_level

class CaseSchema(ProductSchema):
    instance_model = Case

    color = fields.Str(validate=validate.OneOf(valid_values.colors), required=True)
    device = fields.Str(validate=validate.OneOf(valid_values.devices), required=True)
    protection_level = fields.Str(validate=validate.OneOf(valid_values.protection_levels), required=True)
    dimensions = fields.Nested(DimensionsSchema(), required=True)