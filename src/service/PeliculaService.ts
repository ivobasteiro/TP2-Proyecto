import { PeliculaDaoMongoDb } from "../repository/PeliculaDaoMongoDb.js"
import Pelicula from "../models/Pelicula.js";

class PeliculaService {

    peliculaDaoMongoDb : PeliculaDaoMongoDb = new PeliculaDaoMongoDb();

    constructor() {
        this.peliculaDaoMongoDb = new PeliculaDaoMongoDb();
    }

    async findAll()  : Promise<Pelicula[]> {
        return this.peliculaDaoMongoDb.findAll();
    }

    async add(payload : any) {
        const { id, nombre, url_imagen, es_pelicula, descripcion } = payload;
        await this.peliculaDaoMongoDb.add(new Pelicula(id, nombre, url_imagen, es_pelicula, descripcion));
    }

    async get(clave: any)  : Promise<Pelicula> {
        clave = Number(clave);
        const pelicula : Pelicula = await this.peliculaDaoMongoDb.get(clave);
        if(pelicula.getId()==0) {
            throw "No existe pelicula"
        }
        return pelicula;
    }

    // Evitar borrados fisicos
    // usar borrados logicos
    async delete(clave: any)  : Promise<Boolean> {
        clave = Number(clave);
        return await this.peliculaDaoMongoDb.delete(clave);
    }

    static enviarNotificacion() {
        // tarea compleja
        // leer de la base de datos
        // armar una respuesta
        // enviar
    }

}

export default PeliculaService


// router  ->  controller  ->  servicios -> repository (dao)