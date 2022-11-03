class Pelicula {
    private id: Number;
    private nombre: string; // private int numero
    private url_imagen: string;
    private es_pelicula: Number;
    private descripcion: string;

    constructor(id: Number, nombre: string, url_imagen: string, es_pelicula: Number, descripcion: string) {
        this.id = id;
        this.nombre = nombre;
        this.url_imagen = url_imagen;
        this.es_pelicula = es_pelicula;
        this.descripcion = descripcion;
    }

    public getId(): Number {
        return this.id;
    }

    public setId(id: number) {
        this.id = id;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public setUrl_imagen(url_imagen: string) {
        this.url_imagen = url_imagen;
    }

    public setEs_pelicula(es_pelicula: number) {
        this.es_pelicula = es_pelicula;
    }

    public setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }
}

export default Pelicula;