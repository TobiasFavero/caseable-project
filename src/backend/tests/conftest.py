import pytest
from repository.mongo_utils import MongoUtils
from app_setup import create_app

@pytest.fixture
def app():
    app = create_app()
    yield app
    #cleanup after running each test
    cleanup()

@pytest.fixture
def client(app):
    yield app.test_client()

def cleanup():
    MongoUtils().drop_products_collection()



