from flask_restful import Resource

class ProductsController(Resource):
    def get(self):
        return {'message': 'test products'}