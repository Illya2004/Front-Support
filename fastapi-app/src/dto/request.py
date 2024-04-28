from typing import List, Optional
from pydantic import BaseModel


class CategoryModel(BaseModel):
    id: int
    name: str


class RequestModel(BaseModel):
    requestId: int
    description: str
    location: str
    user_id: int
    like_count: Optional[int] = None
    categories: List[CategoryModel]


class RequestModelNoLike(BaseModel):
    requestId: int
    description: str
    location: str
    user_id: int
    categories: List[int]


class RequestUpdate(BaseModel):
    description: Optional[str] = None
    location: Optional[str] = None
    categories: Optional[List[int]] = None  # Adding categories directly to RequestUpdate


class UserRequests(BaseModel):
    requestsCount: int
    requests: List[RequestModel]
