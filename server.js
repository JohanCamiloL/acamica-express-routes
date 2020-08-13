const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./model/Author');

const app = express();

let autores = [];

app.use(bodyParser.json());

/**
 * Get all authors
 */
app.get('/autores', (req, res) => {
    res.status(200)
        .json({ autores });
});

/**
 * Create a new author by the given properties and save it on the authors array.
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
 * Get author by the given id.
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
 * Remove author by the given id.
 */
app.delete('/autores/:id', (req, res) => {
    const { id } = req.params;

    deleteAuthorById(id);

    res.status(204)
        .json({});
});

app.put('/autores/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, fechaDeNacimiento, libros } = req.body;

    const autor = new Author(id, nombre, apellido, fechaDeNacimiento, libros);

    updateUser(autor);

    res.status(200)
        .json({ id });
});

/**
 * Apdate an author
 * @param {Author} author Author 
 */
const updateUser = (author) => {
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
    const filteredAuthors = autores.filter(author => author.id != id);

    autores = filteredAuthors;
}

/**
 * Get an author by its id.
 * @param {Number} id Author id
 * @return {Author} Author object
 */
const getAuthorById = (id) => autores.find(author => author.id == id);

/**
 * Put the server to listen requests on 3000 port.
 */
app.listen(3000, () => console.log('Server listening on port 3000'));