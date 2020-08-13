from . import user
from ..services.user import registerUser,loginUser
from flask import request


@user.route("/register", methods=["POST"])
def register():
    response = registerUser(request.json)
    return response


@user.route("/login", methods=["POST"])
def login():
    response = loginUser(request.json)
    return response
