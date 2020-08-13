const authorsArray = require('../config/authorsArray');
const Author = require('../model/Author');

/**
 * Get all authors from main list.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getAuthors = (req, res) => {
    res.status(200).json({ authors: authorsArray.getAuthors() });
}

/**
 * Creates and saves a new author on the main list.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const createNewAuthor = (req, res) => {
    const { id, nombre, apellido, fechaDeNacimiento, libros } = req.body;

    if (id && nombre && apellido && fechaDeNacimiento && libros) {
        const author = new Author(id, nombre, apellido, fechaDeNacimiento, libros);
        authorsArray.addAuthor(author);

        res.status(201).json({ author });
    } else {
        res.status(400)
            .json({ message: "Malformed request" });
    }
}

/**
 * Gets an author by its id.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const getAuthorById = (req, res) => {
    const { id } = req.params;

    const author = authorsArray.getAuthorById(id);

    if (author) {
        res.status(200)
            .json({ author });
    } else {
        res.status(404)
            .json({ message: 'There is no author with id ' + id });
    }
}

/**
 * Delete an author from the main list by the given id.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const deleteAuthor = (req, res) => {
    const { id } = req.params;

    authorsArray.deleteAuthorById(id);

    res.status(204).json({});
}

/**
 * Updates an author by the given id.
 * @param {import('express').Request} req Request object
 * @param {import('express').Response} res Response object
 */
const updateAuthor = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, fechaDeNacimiento, libros } = req.body;

    const author = new Author(id, nombre, apellido, fechaDeNacimiento, libros);

    authorsArray.updateAuthor(author);

    res.status(200).json({ id });
}

/**
 * Middleware to verify if an author already exists.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Next function
 */
const verifyIfAuthorExists = (req, res, next) => {
    const { id } = req.params;
    const user = authorsArray.getAuthorById(id);

    if (!user) {
        res.status(404)
            .json({ message: `The author with id ${id} doesn't exists` });
    }

    next();
}

/**
 * Middleware to verify if an author already exists with the first and last name.
 * @param {import('express').Request} req Request object.
 * @param {import('express').Response} res Response object.
 * @param {import('express').NextFunction} next Next function
 */
const verifyAuthorFirstAndLastName = (req, res, next) => {
    const { nombre, apellido } = req.body;
    const authors = authorsArray.getAuthors();

    const author = authors.find(author => author.nombre === nombre && author.apellido === apellido);

    if (author) {
        res.status(409)
            .json({ message: 'There is an author with the same first and last name' });
    }

    next();
}

module.exports = {
    getAuthors,
    createNewAuthor,
    getAuthorById,
    deleteAuthor,
    updateAuthor,
    verifyIfAuthorExists,
    verifyAuthorFirstAndLastName
}