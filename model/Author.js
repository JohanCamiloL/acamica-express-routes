class Author {
    constructor(id, nombre, apellido, fechaDeNacimiento, libros) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.libros = libros;
    }
}

module.exports = Author;