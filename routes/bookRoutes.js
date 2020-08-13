const bookController = require('../controller/bookController');

/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    app.get('/autores/:id/libros', bookController.getBooksFromAuthor);

    app.post('/autores/id/libros', bookController.addBookToAuthor);

    app.get('/autores/id/libros/:idLibro', bookController.getBookFromAuthor);

    app.put('/autores/id/libros/:idLibro', bookController.updateBookFromAuthor);

    app.delete('/autores/id/libros/:idLibro', bookController.deleteBookFromAuthor);
}