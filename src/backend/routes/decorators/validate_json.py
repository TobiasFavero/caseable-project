from functools import wraps
from flask import request

def validate_json(f):
    @wraps(f)
    def wrapper(*args, **kw):
        try:
            request.json
        except Exception:
            message = "The payload must be a valid json."
            return {"error": message}, 400
        return f(*args, **kw)
    return wrapper
