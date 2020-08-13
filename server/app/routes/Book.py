from . import book
from ..services.book import getBook, addBook, sendCategory, updateBook, sendBook,deleteBook
from flask import request


@book.route("/get")
def get_book():
    page = request.args.get("page", default=1, type=int)
    data = getBook(page,request.headers["Authorization"])

    return data


@book.route("/<id>")
def send_book(id):
    response = sendBook(int(id))
    return response


@book.route("/add", methods=["GET", "POST"])
def add_book():
    if request.method == "POST":
        response = addBook(request.json, request.headers["Authorization"])
        return response
    else:
        response = sendCategory()
        return response


@book.route("/update", methods=["GET", "POST"])
def update_book():
    if request.method == "POST":
        response = updateBook(request.json, request.headers["Authorization"])
    else:
        pass
    return response

@book.route("/delete", methods=["POST"])
def delete_book():
    response = deleteBook(request.json, request.headers["Authorization"])
    return response