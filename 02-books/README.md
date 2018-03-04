# Project 02 - Books

[![Python Language](https://img.shields.io/badge/language-python-4280B1.svg)](https://python.org)
[![Flask Microframework](https://img.shields.io/badge/framework-Flask-000000.svg)](http://flask.pocoo.org/)
[![PostgreSQL Database](https://img.shields.io/badge/database-PostgreSQL-008FBF.svg)](https://www.postgresql.org/)
[![Heroku Web Hosting Service](https://img.shields.io/badge/web%20hosting%20service-Heroku-79589F.svg)](https://www.heroku.com/)

The full project specification can be found [here](https://cs50.github.io/web/projects/1).

## Requirements

In this project, you’ll build a book review website. Users will be able to register for your website and then log in using their `username` and `password`. Once they log in, they will be able to search for books, leave reviews for individual books, and see the reviews made by other people. You’ll also use the a third-party `API` by [Goodreads](https://www.goodreads.com/api), another book review website, to pull in ratings from a broader audience. Finally, users will be able to query for book details and book reviews programmatically via your website’s `API`.

- **Registration** : Users should be able to register for your website, providing (at minimum) a `username` and `password`.

- **Login** : Users, once registered, should be able to log in to your website with their username and password.

- **Logout** : Logged in users should be able to log out of the site.

- **Import** : Provided for you in this project is a file called `books.csv`, which is a spreadsheet in CSV format of 5000 different books. Each one has an `ISBN nubmer`, a `title`, an `author`, and a `publication year`. In a Python file called `import.py` separate from your web application, write a program that will take the books and import them into your `PostgreSQL` database. You will first need to decide what table(s) to create, what columns those tables should have, and how they should relate to one another. Run this program by running `python3 import.py` to import the books into your database, and submit this program with the rest of your project code.

- **Search** : Once a user has logged in, they should be taken to a page where they can search for a book. Users should be able to type in the ISBN number of a book, the title of a book, or the author of a book. After performing the search, your website should display a list of possible matching results, or some sort of message if there were no matches. If the user typed in only part of a title, ISBN, or author name, your search page should find matches for those as well!

- **Book Page** : When users click on a book from the results of the search page, they should be taken to a book page, with details about the book: its title, author, publication year, ISBN number, and any reviews that users have left for the book on your website.

- **Review Submission** : On the book page, users should be able to submit a review - consisting of a rating on a scale of 1 to 5, as well as a text component to the review where the user can write their opinion about a book. Users should not be able to submit multiple reviews for the same book.

- **Goodreads Review Data** : On your book page, you should also display (if available) the average rating and number of ratings the work has received from Goodreads.

- **API Access** : If users make a GET request to your website’s `/api/<isbn>` route, where `<isbn>` is an ISBN number, your website should return a `JSON` response containing the book’s title, author, publication date, ISBN number, review count, and average score. The resulting `JSON` should follow the format:

````JSON
{
    "title": "Memory",
    "author": "Doug Lloyd",
    "year": 2015,
    "isbn": "1632168146",
    "review_count": 28,
    "average_score": 5.0
}
````
If the requested ISBN number isn’t in your database, your website should return a `404 error`.

## Notes

You should be using **raw SQL commands** (as via `SQLAlchemy`’s execute method) in order to make database queries. You **should not use** the `SQLAlchemy ORM` (if familiar with it) for this project.

In `README.md`, include a **short writeup** describing your project, what’s contained in each file, and (optionally) any other additional useful information about your project.
If you’ve added any `Python` packages that need to be installed in order to run your web application, be sure to add them to `requirements.txt`!
