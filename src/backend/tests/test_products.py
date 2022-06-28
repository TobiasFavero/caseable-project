from config.constants import PRODUCTS_ROUTE
from tests.utils import create_mock_product

'''
    When getting all products the status code should be 200, and should have one product.
'''
def test_get_products(client):
    response = create_mock_product(client)
    assert response.status_code == 201

    response = client.get(PRODUCTS_ROUTE)
    assert response.status_code == 200
    assert len(response.json) == 1

'''
    When getting a product by id, the status code should be 200, and should return the product with the sent id.
'''
def test_get_product_by_id(client):
    response = create_mock_product(client)
    assert response.status_code == 201

    response = client.get(f'{PRODUCTS_ROUTE}/1')
    assert response.status_code == 200
    assert response.json["id"] == 1