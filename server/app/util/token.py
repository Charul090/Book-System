import jwt
from instance.config import secret
import datetime


def decodeToken(token):
    data = jwt.decode(token, secret)

    expiry = datetime.datetime.strptime(data["expiry"], "%Y-%m-%d %H:%M:%S.%f")

    if expiry < datetime.datetime.utcnow():
        return False

    return data
