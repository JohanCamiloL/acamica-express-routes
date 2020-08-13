const authorsArray = require('../config/authorsArray');
const Book = require('../model/Book');

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
    const authorId = req.params.id;
    const { id, titulo, descripcion, anioPublicacion } = req.body;

    if (id && titulo && descripcion && anioPublicacion) {
        const book = new Book(id, titulo, descripcion, anioPublicacion);
        authorsArray.addBookToAuthor(authorId, book);

        res.status(201)
            .json({ authorId, bookId: id });
    } else {
        res.status(400)
            .json({ message: 'Malformed body request' });
    }
}

/**
 * Gets the given book from the given author.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getBookFromAuthor = (req, res) => {
    const { id, idLibro } = req.params;
    const book = authorsArray.getBookFromAuthor(id, idLibro);

    res.status(200)
        .json({ book });
}

/**
 * Updates the given book on the given author.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const updateBookFromAuthor = (req, res) => {
    const { id, idLibro } = req.params;
    const { titulo, descripcion, anioPublicacion } = req.body;

    authorsArray.updateBookOnAuthor(id, idLibro, { titulo, descripcion, anioPublicacion });

    res.status(200)
        .json({ authorId: id, bookId: idLibro });
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