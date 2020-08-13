from . import db

class CategoryModel(db.Model):
    __tablename__ = "category"
    id = db.Column(db.Integer,primary_key=True)
    category = db.Column(db.String(100),unique=True)

