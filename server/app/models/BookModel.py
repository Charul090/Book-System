from . import db

class BookModel(db.Model):
    __tablename__ = "book"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(100))
    price = db.Column(db.Integer)
    category = db.Column(db.Integer,db.ForeignKey("category.id"))
    description = db.Column(db.String(1000))
    quantity = db.Column(db.Integer)
    user_id = db.Column(db.Integer,db.ForeignKey("user.id"))
