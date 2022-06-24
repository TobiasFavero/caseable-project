from marshmallow import Schema, fields, missing, validate
from config.fields import CaseFieldsValidValues

valid_values = CaseFieldsValidValues()

class Product:
    def __init__(self, id, price, name, description, image_link, product_type):
        self.id: str = id
        self.price: int = price
        self.name: str = name
        self.description: str = description
        self.image_link: str = image_link
        self.product_type: str = product_type

class ProductSchema(Schema):
    model_class = Product

    id = fields.Int(validate=validate.Range(min=1), required=True)
    price = fields.Int(validate=validate.Range(min=0.1), required=True)
    name = fields.String(validate=validate.Length(1), required=True)
    description = fields.String(validate=validate.Length(1), required=True)
    image_link = fields.Url(missing="https://de.bellroy.com/products/phone-case")
    product_type = fields.String(validate=validate.OneOf(valid_values.product_types), required=True)

    

