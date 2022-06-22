from abc import abstractmethod
from typing import List, TypeVar

T = TypeVar("T")

class Repository:
    @abstractmethod
    def create(item: T) -> str:
        pass

    @abstractmethod
    def delete(item: T) -> bool:
        pass

    @abstractmethod
    def update(item: T) -> T:
        pass

    @abstractmethod
    def get(filters = None) -> List[T]:
        pass