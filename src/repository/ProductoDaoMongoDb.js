import Producto from '../models/Producto.js';
import { ConectarMongoDb } from './ConectarMongoDb.js';
class ProductoDaoMongoDb {
    constructor() {
        this.conectarMongoDb = new ConectarMongoDb();
    }
    async add(elemento) {
        const db = await this.conectarMongoDb.conectar();
        if (db != undefined) {
            const collection = db.collection('productos');
            await collection.insertOne(elemento);
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(true);
    }
    async findAll() {
        const db = await this.conectarMongoDb.conectar();
        const productos = new Array;
        if (db != undefined) {
            const collection = db.collection('productos');
            const findResult = (await collection.find({}).toArray());
            findResult.forEach(e => productos.push(new Producto(e.id, e.nombre, e.importe)));
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(productos);
    }
    async get(clave) {
        const db = await this.conectarMongoDb.conectar();
        const producto = new Producto(0, "", 0);
        if (db != undefined) {
            const collection = db.collection('productos');
            const findResult = await collection.findOne({ id: clave });
            if (findResult != null) {
                producto.setId(findResult.id);
                producto.setNombre(findResult.nombre);
                producto.setImporte(findResult.importe);
            }
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(producto);
    }
    async delete(clave) {
        const db = await this.conectarMongoDb.conectar();
        if (db != undefined) {
            const collection = db.collection('productos');
            await collection.deleteMany({ id: clave });
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(true);
    }
}
export { ProductoDaoMongoDb };
