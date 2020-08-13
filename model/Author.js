class Author {

    /**
     * Author constructor
     * @param {Number} id Author id.
     * @param {String} nombre Author first name.
     * @param {String} apellido Author last name.
     * @param {String} fechaDeNacimiento Author birth date.
     * @param {Array} libros Author books.
     */
    constructor(id, nombre, apellido, fechaDeNacimiento, libros) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.libros = libros;
    }
}

module.exports = Author;