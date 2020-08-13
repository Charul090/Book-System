from math import ceil

def pagination(page,data):
    per_page = 15
    total_pages = ceil(len(data)/per_page)

    if total_pages < page:
        return None,None

    start = (page-1) * per_page
    end = page * per_page

    data = data[start:end]

    return data,total_pages
