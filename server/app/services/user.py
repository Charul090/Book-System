import jwt
import json
from ..models import db,UsersModel


def registerUser(data):
    name = data["name"]
    email = data["email"]
    password = data["password"]

    status = UsersModel.query.filter(UsersModel.email == email).first()

    if status is None:
        user = UsersModel(name=name,email=email,password=password)
        db.session.add(user)
        db.session.commit()

        return json.dumps({"error":False,"message":"Registered Successfully"})    
    else:
        return json.dumps({"error":True,"message":"Email already exists"})

    return "Success"