from . import user
from ..services.user import registerUser
from flask import request


@user.route("/register", methods=["POST"])
def register():
    response = registerUser(request.json)
    return response
