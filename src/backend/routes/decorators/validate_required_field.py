from functools import wraps
from flask import request

def validate_required_field(field_key):
    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kw):
            if field_key not in request.json:
                return {"error": f"The key: {field_key} should be included in the payload."}, 400

            return f(*args, **kw)
        return wrapper
    return decorator