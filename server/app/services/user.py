import jwt
import json
from ..models import db, UsersModel
import datetime
from instance.config import secret


def registerUser(data):
    name = data["name"]
    email = data["email"]
    password = data["password"]

    status = UsersModel.query.filter(UsersModel.email == email).first()

    if status is None:
        user = UsersModel(name=name, email=email, password=password)
        db.session.add(user)
        db.session.commit()

        return json.dumps({"error": False, "message": "Registered Successfully"})
    else:
        return json.dumps({"error": True, "message": "Email already exists"})

    return "Success"


def loginUser(data):
    email = data["email"]
    password = data["password"]

    status = UsersModel.query.filter(UsersModel.email == email).first()

    if status is None:
        return json.dumps({"error": True, "message": "Email doesn't exist"})
    else:
        if status.password == password:
            obj = {
                "email": email,
                "created": str(datetime.datetime.utcnow()),
                "expiry": str(datetime.datetime.utcnow()+datetime.timedelta(days=1))
            }

            token = jwt.encode(obj, secret)

            return json.dumps({"error": False, "token": token.decode(), "message": "Login Successfull"})
        else:
            return json.dumps({"error": True, "message": "Wrong Password"})
