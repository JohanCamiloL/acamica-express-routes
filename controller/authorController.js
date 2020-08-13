const authorsArray = require('../config/authorsArray');
const Author = require('../model/Author');

/**
 * Get all authors from main list.
 * @param {Request} req Request object
 * @param {Response} res Response object
 */
const getAuthors = (req, res) => {
    res.status(200).json({ authors: authorsArray.getAuthors() });
}

/**
 * Creates and saves a new author on the main list.
 * @param {Request} req Request object
 * @param {Response} res Response object
 */
const createNewAuthor = (req, res) => {
    const { id, nombre, apellido, fechaDeNacimiento, libros } = req.body;

    if (id && nombre && apellido && fechaDeNacimiento && libros) {
        const author = new Author(id, nombre, apellido, fechaDeNacimiento, libros);
        authorsArray.addAuthor(author);

        res.status(201).json({ id });
    } else {
        res.status(400)
            .json({ message: "Malformed request" });
    }
}

/**
 * Gets an author by its id.
 * @param {Request} req Request object
 * @param {Response} res Response object
 */
const getAuthorById = (req, res) => {
    const { id } = req.params;

    const author = authorsArray.getAuthorById(id);

    if (author) {
        res.status(200)
            .json({ author });
    } else {
        res.status(404)
            .json({ message: 'There is no author witj id ' + id });
    }
}

/**
 * Delete an author from the main list by the given id.
 * @param {Request} req Request object
 * @param {Response} res Response object
 */
const deleteAuthor = (req, res) => {
    const { id } = req.params;

    authorsArray.deleteAuthorById(id);

    res.status(204).json({});
}

/**
 * Updates an author by the given id.
 * @param {Request} req Request object
 * @param {Response} res Response object
 */
const updateAuthor = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, fechaDeNacimiento, libros } = req.body;

    const author = new Author(id, nombre, apellido, fechaDeNacimiento, libros);

    authorsArray.updateAuthor(author);

    res.status(200).json({ id });
}

module.exports = {
    getAuthors,
    createNewAuthor,
    getAuthorById,
    deleteAuthor,
    updateAuthor
}