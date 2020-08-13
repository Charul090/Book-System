from . import db

class UsersModel(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer,primary_key=True)
    email = db.Column(db.String(100),unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(100))
