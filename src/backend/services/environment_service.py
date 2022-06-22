from flask import Config
from utils.singleton import Singleton

class EnvironmentService(metaclass=Singleton):
    __env: Config = None

    def initialize(self, env):
        self.__env = env
        return EnvironmentService()

    def get_all(self):
        return self.__env.copy()

    def get_one(self, key):
        return self.__env.get(key)