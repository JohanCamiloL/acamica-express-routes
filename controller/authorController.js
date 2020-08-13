const Author = require('../model/Author');

let authors = [];

/**
 * Get all authors from main list.
 * @param {Request} req Request object
 * @param {Response} res Response object
 */
const getAllAuthorsFromList = (req, res) => {
    res.status(200).json({ authors });
}

/**
 * Creates and saves a new author on the main list.
 * @param {Request} req Request object
 * @param {Response} res Response object
 */
const createNewAuthorOnList = (req, res) => {
    const { id, nombre, apellido, fechaDeNacimiento, libros } = req.body;

    if (id && nombre && apellido && fechaDeNacimiento && libros) {
        authors.push(new Author(id, nombre, apellido, fechaDeNacimiento, libros));

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
const getAuthorByIdFromList = (req, res) => {
    const { id } = req.params;

    const author = getAuthorById(id);

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
const deleteAuthorFromList = (req, res) => {
    const { id } = req.params;

    deleteAuthorById(id);

    res.status(204).json({});
}

/**
 * Updates an author by the given id.
 * @param {Request} req Request object
 * @param {Response} res Response object
 */
const updateAuthorOnList = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, fechaDeNacimiento, libros } = req.body;

    const autor = new Author(id, nombre, apellido, fechaDeNacimiento, libros);

    updateAuthor(autor);

    res.status(200).json({ id });
}

/**
 * Update an author
 * @param {Author} author Author 
 */
const updateAuthor = (author) => {
    const initAutor = getAuthorById(author.id);

    initAutor.nombre = author.nombre;
    initAutor.apellido = author.apellido;
    initAutor.fechaDeNacimiento = author.fechaDeNacimiento;
    initAutor.libros = author.libros;
}

/**
 * Delete an author by the given id.
 * @param {Number} id Author id
 */
const deleteAuthorById = (id) => {
    const filteredAuthors = authors.filter(author => author.id != id);

    authors = filteredAuthors;
}

/**
 * Get an author by its id.
 * @param {Number} id Author id
 * @return {Author} Author object
 */
const getAuthorById = (id) => authors.find(author => author.id == id);

module.exports = {
    getAllAuthorsFromList,
    createNewAuthorOnList,
    getAuthorByIdFromList,
    deleteAuthorFromList,
    updateAuthorOnList
}