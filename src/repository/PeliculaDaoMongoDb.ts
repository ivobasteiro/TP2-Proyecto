import Dao from './Dao.js'
import Pelicula from '../models/Pelicula.js'
import { ConectarMongoDb } from './ConectarMongoDb.js';

class PeliculaDaoMongoDb implements Dao<Pelicula,Number>{

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    public async add (elemento: Pelicula) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('peliculas');    
            await collection.insertOne(elemento);
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true);    
    }
    public async findAll () : Promise<Pelicula[]> {
        const db = await this.conectarMongoDb.conectar();
        const peliculas = new Array<Pelicula>;                
        if(db != undefined) {
            const collection = db.collection('peliculas');    
            const findResult = (await collection.find({}).toArray()) 
            findResult.forEach( e => 
                peliculas.push(new Pelicula(e.id,e.nombre,e.url_imagen, e.es_pelicula, e.descripcion)) );
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(peliculas);
    }
    public async get (clave: Number) : Promise<Pelicula> {
        const db = await this.conectarMongoDb.conectar();
        const pelicula = new Pelicula(0, "", "", 0, "");
        if(db != undefined) {
            const collection = db.collection('peliculas');    
            const findResult = await collection.findOne({id:clave})
            if(findResult != null) {
                pelicula.setId(findResult.id);
                pelicula.setNombre(findResult.nombre);
                pelicula.setUrl_imagen(findResult.url_imagen);
                pelicula.setEs_pelicula(findResult.es_pelicula);
                pelicula.setDescripcion(findResult.descripcion);
            }
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(pelicula);
    }
    public async delete (clave: Number) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('peliculas');    
            await collection.deleteMany({id:clave});
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true)
    }

}

export {PeliculaDaoMongoDb}