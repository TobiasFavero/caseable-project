class DatabaseError(Exception):
    def __init__(self, message: str, *args: object):
        super().__init__(*args)
        self.message = message