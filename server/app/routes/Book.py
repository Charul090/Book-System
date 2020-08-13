from . import book
from ..services.book import getBook, addBook, sendCategory
from flask import request


@book.route("/get")
def get_book():
    page = request.args.get("page",default=1,type=int)
    data = getBook(page)

    return data


@book.route("/add", methods=["GET", "POST"])
def add_book():
    if request.method == "POST":
        response = addBook(request.json, request.headers["Authorization"])
        return response
    else:
        response = sendCategory()
        return response
