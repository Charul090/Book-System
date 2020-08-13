from . import book
from ..services.book import getBook

@book.route("/get"):
def get_book():
    data = getBook(page)

    return data
