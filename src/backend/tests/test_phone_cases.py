import json
from config.constants import CASES_ROUTE, PRODUCTS_ROUTE
from tests.utils import create_mock_product, headers, get_mock_product

'''
    When creating a product, the returning status code should be 201.
'''
def test_create_product(client):
    response = create_mock_product(client)
    assert response.status_code == 201

'''
    When creating a product with the same id, the returning status code should be 400.
'''
def test_create_product_with_same_id(client):
    response = create_mock_product(client)
    assert response.status_code == 201

    response = create_mock_product(client)
    assert response.status_code == 400

'''
    When updating the field price of the product, when getting the product, the price should be updated.
'''
def test_update_product_price(client):
    response = create_mock_product(client)
    assert response.status_code == 201

    update_request = {
        "id": 1,
        "price": 100,
    }

    response = client.put(CASES_ROUTE, data=json.dumps(update_request), headers=headers)
    assert response.status_code == 200

    response = client.get(f'{PRODUCTS_ROUTE}/1', headers=headers)
    updated_product = response.json

    assert response.status_code == 200
    assert updated_product["price"] == 100

'''
    When deleting a proudct, the returning status code should be 200.
'''
def test_delete_product(client):
    response = create_mock_product(client)
    assert response.status_code == 201

    response = client.delete(CASES_ROUTE, data=json.dumps({"id": 1}), headers=headers)
    assert response.status_code == 200

'''
    When deleting a product with an unexisting id, the returning status code should be 500.
'''
def test_delete_product_with_non_existing_id(client):
    response = client.delete(CASES_ROUTE, data=json.dumps({"id": 999}), headers=headers)
    assert response.status_code == 500

'''
    When updating a product with a negative price, the returning status code should be 400.
'''
def test_create_product_price_validation(client):
    mock_product = get_mock_product()
    mock_product["price"] = -1
    response = client.post(CASES_ROUTE, data=json.dumps(mock_product), headers=headers)
    assert response.status_code == 400