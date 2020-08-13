import json
from ..models import db, BookModel, UsersModel, CategoryModel
from ..util.token import decodeToken


def getBook(page):
    data = BookModel.query.all()

    


def addBook(data, token):
    token = decodeToken(token)

    if token is False:
        return json.dumps({"message": "Token Expired", "error": True})

    name = data["name"]
    price = data["price"]
    description = data["description"]
    quantity = data["quantity"]

    user = UsersModel.query.filter(UsersModel.email == token["email"]).first()
    user_id = user.id

    category_id = CategoryModel.query.filter(
        CategoryModel.category == data["category"]).first()
    category_id = category_id.id

    book = BookModel(name=name, price=price, description=description,
                     quantity=quantity, user_id=user_id, category=category_id)

    db.session.add(book)
    db.session.commit()

    return json.dumps({"error": False, "message": "Book Added Successfully"})


def sendCategory():
    category = CategoryModel.query.all()
    data = []

    for x in category:
        data.append(x.category)

    return json.dumps({"error": False, "category": data})
