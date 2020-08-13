from flask import Blueprint

book = Blueprint("book",__name__)
user = Blueprint("user",__name__)

from . import User