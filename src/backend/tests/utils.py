import json
from config.constants import CASES_ROUTE

mimetype = 'application/json'

headers = {
    'Content-Type': mimetype,
    'Accept': mimetype
}

def get_mock_product():
    return {
        "id": "1", 
        "price": 50, 
        "name": "test", 
        "description": "test", 
        "image_link": "https://media.istockphoto.com/photos/multicolor-mobile-phone-plastic-cases-picture-id487000910?k=20&m=487000910&s=612x612&w=0&h=F3DVzb89tPiyHHn7c_iX11UUcHbdOUactu7yW0SFLHI=",
        "product_type": "phone_case", 
        "color": "red", 
        "device": "iphone_11", 
        "dimensions": "1.5 x 2 x 3", 
        "protection_level": "high"
    }

def create_mock_product(client):
    mock_product = get_mock_product()
    response = client.post(CASES_ROUTE, data=json.dumps(mock_product), headers=headers)
    return response