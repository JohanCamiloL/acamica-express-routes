const bookController = require('../controller/bookController');
const authorController = require('../controller/authorController');

/**
 * 
 * @param {import('express').Express} app 
 */
module.exports = (app) => {

    app.get('/autores/:id/libros', authorController.verifyIfAuthorExists, bookController.getBooksFromAuthor);

    app.post('/autores/:id/libros', authorController.verifyIfAuthorExists, bookController.addBookToAuthor);

    app.get('/autores/:id/libros/:idLibro', authorController.verifyIfAuthorExists,
        bookController.verifyIfBookExistsOnAuthor, bookController.getBookFromAuthor);

    app.put('/autores/:id/libros/:idLibro', authorController.verifyIfAuthorExists,
        bookController.verifyIfBookExistsOnAuthor, bookController.updateBookFromAuthor);

    app.delete('/autores/:id/libros/:idLibro', authorController.verifyIfAuthorExists,
        bookController.verifyIfBookExistsOnAuthor, bookController.deleteBookFromAuthor);
}