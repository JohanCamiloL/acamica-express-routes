class Book {

    /**
     * Book constructor.
     * @param {Number} id Book id.
     * @param {String} titulo Book title.
     * @param {String} descripcion Book description.
     * @param {String} anioPublicacion Book publish date.
     */
    constructor(id, titulo, descripcion, anioPublicacion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.anioPublicacion = anioPublicacion
    }
}

module.exports = Book;