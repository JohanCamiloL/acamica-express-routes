const authorController = require('../controller/authorController');

module.exports = (app) => {

    app.get('/autores', authorController.getAuthors);

    app.post('/autores', authorController.createNewAuthor);

    app.get('/autores/:id', authorController.getAuthorById);

    app.delete('/autores/:id', authorController.deleteAuthor);

    app.put('/autores/:id', authorController.updateAuthor);
}