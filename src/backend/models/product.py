from marshmallow import Schema, fields, validate

class Product:
    def __init__(self, id, price, name, description, image_link):
        self.id: str = id
        self.price: int = price
        self.name: str = name
        self.description: str = description
        self.image_link: str = image_link

class ProductSchema(Schema):
    model_class = Product

    id = fields.Int(validate=validate.Range(min=1), required=True)
    price = fields.Int(validate=validate.Range(min=0.1), required=True)
    name = fields.String(validate=validate.Length(1), required=True)
    description = fields.String(validate=validate.Length(1), required=True)
    image_link = fields.Url(required=True)

    

