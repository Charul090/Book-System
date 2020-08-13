from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .UsersModel import UsersModel
from .BookModel import BookModel
from .CategoryModel import CategoryModel