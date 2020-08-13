import json
from ..models import db, BookModel, UsersModel, CategoryModel
from ..util.token import decodeToken
from ..util.pagination import pagination


def getBook(page,token):
    token = decodeToken(token)

    if token is False:
        return json.dumps({"message": "Token Expired", "error": True})
    
    user = UsersModel.query.filter(UsersModel.email == token["email"]).first()
    user_id = user.id

    data_query = BookModel.query.filter(BookModel.user_id == user_id).all()
    data = []

    for x in data_query:
        obj = {}
        obj["id"] = x.id
        obj["name"] = x.name
        obj["price"] = x.price
        obj["quantity"] = x.quantity
        category = CategoryModel.query.filter(
            CategoryModel.id == x.category).first()
        obj["category"] = category.category
        obj["author"] = x.author
        obj["description"] = x.description

        data.append(obj)
    data, total_pages = pagination(page, data)

    if total_pages is None:
        return json.dumps({"error": True, "message": "Invalid page"})

    category = sendCategory()

    return json.dumps({"error": False, "data": data, "total_pages": total_pages, "page": page,"category":category})

def sendBook(id):
    book = BookModel.query.filter(BookModel.id == id).first()
    obj = {}
    obj["id"] = book.id
    obj["name"] = book.name
    obj["price"] = book.price
    obj["quantity"] = book.quantity
    category = CategoryModel.query.filter(
        CategoryModel.id == book.category).first()
    obj["category"] = category.category
    obj["author"] = book.author
    obj["description"] = book.description

    return json.dumps({"error":False,"data":obj})

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


def updateBook(data, token):
    token = decodeToken(token)

    if token is False:
        return json.dumps({"message": "Token Expired", "error": True})

    name = data["name"]
    price = data["price"]
    description = data["description"]
    quantity = data["quantity"]
    author = data["author"]

    category_id = CategoryModel.query.filter(
        CategoryModel.category == data["category"]).first()
    category_id = category_id.id

    book = BookModel.query.filter(BookModel.id == data["id"]).first()
    book.name = name
    book.price = price
    book.description = description
    book.category = category_id
    book.quantity = quantity
    db.session.commit()

    return json.dumps({"error": False, "message": "Book Updated Successfully"})

def deleteBook(data,token):
    token = decodeToken(token)
    id = data["id"]

    if token is False:
        return json.dumps({"message": "Token Expired", "error": True})

    user = UsersModel.query.filter(UsersModel.email == token["email"]).first()
    user_id = user.id

    book = BookModel.query.filter(BookModel.id == data["id"],BookModel.user_id == user_id).first()

    if book is None:
        return json.dumps({"message": "Unauthorized access", "error": True})
    
    db.session.delete(book)
    db.session.commit()
    return json.dumps({"error": False, "message": "Book Deleted Successfully"})


def sendCategory():
    category = CategoryModel.query.all()
    data = []

    for x in category:
        data.append(x.category)

    return data
