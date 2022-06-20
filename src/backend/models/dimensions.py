from marshmallow import Schema, fields, validate

class Dimensions:
    def __init__(self, height, width, depth):
        self.height: int = height
        self.width: int = width
        self.depth: int = depth

class DimensionsSchema(Schema):
    height = fields.Int(validate=validate.Range(min=1, max=999), required=True)
    width = fields.Int(validate=validate.Range(min=1, max=999), required=True)
    depth = fields.Int(validate=validate.Range(min=1, max=999), required=True)