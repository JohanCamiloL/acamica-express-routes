const authorController = require('../controller/authorController');

module.exports = (app) => {

    app.get('/autores', authorController.getAuthors);

    app.post('/autores', authorController.verifyAuthorFirstAndLastName, authorController.createNewAuthor);

    app.get('/autores/:id', authorController.verifyIfAuthorExists, authorController.getAuthorById);

    app.delete('/autores/:id', authorController.verifyIfAuthorExists, authorController.deleteAuthor);

    app.put('/autores/:id', authorController.verifyIfAuthorExists, authorController.updateAuthor);
}