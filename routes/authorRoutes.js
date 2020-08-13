const authorController = require('../controller/authorController');

module.exports = (app) => {

    app.get('/autores', authorController.getAllAuthorsFromList);

    app.post('/autores', authorController.createNewAuthorOnList);

    app.get('/autores/:id', authorController.getAuthorByIdFromList);

    app.delete('/autores/:id', authorController.deleteAuthorFromList);

    app.put('/autores/:id', authorController.updateAuthorOnList);
}