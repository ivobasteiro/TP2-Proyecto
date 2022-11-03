import Dao from './Dao.js'
import Producto from '../models/Producto.js'
import { ConectarMongoDb } from './ConectarMongoDb.js';

class ProductoDaoMongoDb implements Dao<Producto,Number>{

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    public async add (elemento: Producto) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('productos');    
            await collection.insertOne(elemento);
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true);    
    }
    public async findAll () : Promise<Producto[]> {
        const db = await this.conectarMongoDb.conectar();
        const productos = new Array<Producto>;                
        if(db != undefined) {
            const collection = db.collection('productos');    
            const findResult = (await collection.find({}).toArray()) 
            findResult.forEach( e => 
                productos.push(new Producto(e.id,e.nombre,e.importe)) );
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(productos);
    }
    public async get (clave: Number) : Promise<Producto> {
        const db = await this.conectarMongoDb.conectar();
        const producto = new Producto(0,"",0);
        if(db != undefined) {
            const collection = db.collection('productos');    
            const findResult = await collection.findOne({id:clave})
            if(findResult != null) {
                producto.setId(findResult.id);
                producto.setNombre(findResult.nombre);
                producto.setImporte(findResult.importe);
            }
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(producto);
    }
    public async delete (clave: Number) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('productos');    
            await collection.deleteMany({id:clave});
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true)
    }

}

export {ProductoDaoMongoDb}