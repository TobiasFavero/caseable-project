import imp
from flask import Flask
from flask_restful import Api
from resources.products_controller import ProductsController 

app = Flask(__name__)
api = Api(app)

api.add_resource(ProductsController, '/products')

if __name__ == '__main__':
    app.run(debug=True)