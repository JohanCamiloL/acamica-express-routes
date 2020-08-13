const Book = require('../model/Book');
const Author = require('../model/Author');

const books = [
    new Book(1, 'Primer libro', 'Descripción primer libro', '19/05/2020'),
    new Book(2, 'Segundo libro', 'Descripción segundo libro', '10/03/2019'),
    new Book(3, 'Tercer libro', 'Descripción tercer libro', '21/06/2018')
];

let authors = [
    new Author(1, 'Andres', 'Lopez', '19/05/1997', books),
    new Author(2, 'Carlos', 'Andrade', '17/04/1996', books),
    new Author(3, 'Javier', 'Alvarez', '20/01/1990', books)
]

/**
 * Get authors array.
 * @returns {Array} Authors array.
 */
const getAuthors = () => authors;

/**
 * Add author to array.
 * @param {Author} author Author object.
 */
const addAuthor = (author) => authors.push(author);

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

/**
 * Get books from the given author id.
 * @param {Number} id Author id.
 * @returns {Array} Books array.
 */
const getBooksFromAuthor = (id) => getAuthorById(id).libros;

/**
 * Add the given book to the given author.
 * @param {Number} id Author id.
 * @param {Book} book Book.
 */
const addBookToAuthor = (id, book) => {
    const author = getAuthorById(id);

    author.libros.push(book);
}

module.exports = {
    updateAuthor,
    deleteAuthorById,
    getAuthorById,
    getAuthors,
    addAuthor,
    getBooksFromAuthor,
    addBookToAuthor
};