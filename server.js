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

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));