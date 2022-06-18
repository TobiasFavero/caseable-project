from marshmallow import Schema, fields, validate

class Product:
    def __init__(self, id, price, name, description, image_link):
        self.id = id
        self.price = price
        self.name = name
        self.description = description
        self.image_link = image_link

class ProductSchema(Schema):
    model_class = Product

    id = fields.Int(validate=validate.Range(min=1), required=True)
    price = fields.Int(validate=validate.Range(min=0.1), required=True)
    name = fields.String(validate=validate.Length(1), required=True)
    description = fields.String(validate=validate.Length(1), required=True)
    image_link = fields.Url(required=True)

    

