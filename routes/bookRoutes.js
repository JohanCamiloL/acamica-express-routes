const bookController = require('../controller/bookController');

/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    app.get('/autores/:id/libros');

    app.post('/autores/id/libros');

    app.get('/autores/id/libros/:idLibro');

    app.put('/autores/id/libros/:idLibro');

    app.delete('/autores/id/libros/:idLibro');
}