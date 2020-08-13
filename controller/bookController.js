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

    const book = authorsArray.getBookFromAuthor(id, idLibro);

    res.status(200)
        .json({ book });
}

/**
 * Deletes the given book from the given author.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const deleteBookFromAuthor = (req, res) => {
    const { id, idLibro } = req.params;

    authorsArray.deleteBookOnAuthor(id, idLibro);

    res.status(204)
        .json({});
}

/**
 * Middleware to verify if an author contains the given book.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Next function
 */
const verifyIfBookExistsOnAuthor = (req, res, next) => {
    const { id, idLibro } = req.params;
    const authorBooks = authorsArray.getBooksFromAuthor(id);
    const book = authorBooks.find(book => book.id == idLibro);

    if (!book) {
        res.status(404)
            .json({ message: `The author with id ${id} doesn't have a book with id ${idLibro}` });
    }

    next();
}

module.exports = {
    getBookFromAuthor,
    getBooksFromAuthor,
    addBookToAuthor,
    updateBookFromAuthor,
    deleteBookFromAuthor,
    verifyIfBookExistsOnAuthor
}