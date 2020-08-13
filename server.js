const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./Author');

const app = express();

const autores = [];

app.use(bodyParser.json());

/**
 * Abotener todos los autores.
 */
app.get('/autores', (req, res) => {
    res.status(200)
        .json({ autores });
});

/**
 * Crear un nuevo autor dadas sus propiedades y guardarlo en el arreglo de autores.
 */
app.post('/autores', (req, res) => {
    const { id, nombre, apellido, fechaDeNacimiento, libros } = req.body;

    if (id && nombre && apellido && fechaDeNacimiento && libros) {
        autores.push(new Author(id, nombre, apellido, fechaDeNacimiento, libros));

        res.status(201)
            .json({ id });
    } else {
        res.status(400)
            .json({ message: "Malformed request" });
    }
});

/**
 * Obtener un autor por id.
 */
app.get('/autores/:id', (req, res) => {
    const { id } = req.params;

    const author = getAuthorById(id);

    if (author) {
        res.status(200)
            .json({ author });
    } else {
        res.status(404)
            .json({ message: 'No existe un autor con id ' + id });
    }
});

/**
 * Obtener un autor por su Id.
 * @param {Number} id Id del autor
 * @return {Author} Objeto autor
 */
const getAuthorById = (id) => autores.find(autor => autor.id == id);

/**
 * El servidor esta escuchando en el puerto 3000.
 */
app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));