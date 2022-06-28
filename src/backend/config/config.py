from os import environ

class Config:
    """Base config."""

class ProdConfig(Config):
    FLASK_ENV = "production"
    DEBUG = False
    TESTING = False
    DATABASE_URI = environ.get("PROD_MONGODB_URI")


class DevConfig(Config):
    FLASK_ENV = "development"
    DEBUG = True
    TESTING = True
    DATABASE_URI = environ.get("DEV_MONGODB_URI")

class TestConfig(Config):
    FLASK_ENV = "test"
    DEBUG = True
    TESTING = True
    DATABASE_URI = environ.get("TEST_MONGODB_URI")

def get_config_by_env(env):
    if (env == "development"): return DevConfig()
    if (env == "test"): return TestConfig()
    if (env == "production"): return ProdConfig()

    raise Exception("Incorrect environment.")
        