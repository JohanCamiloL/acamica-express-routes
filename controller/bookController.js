const authorsArray = require('../config/authorsArray');

/**
 * Get all books from the given author.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getBooksFromAuthor = (req, res) => {
    const { id } = req.params;
    const books = authorsArray.getBooksFromAuthor(id);

    res.status(200)
        .json({ books });
}

/**
 * Add given book to the given author
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const addBookToAuthor = (req, res) => {

}

/**
 * Gets the given book from the given author.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getBookFromAuthor = (req, res) => {

}

/**
 * Updates the given book on the given author.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const updateBookFromAuthor = (req, res) => {

}

/**
 * Deletes the given book from the given author.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const deleteBookFromAuthor = (req, res) => {

}

module.exports = {
    getBookFromAuthor,
    getBooksFromAuthor,
    addBookToAuthor,
    updateBookFromAuthor,
    deleteBookFromAuthor
}