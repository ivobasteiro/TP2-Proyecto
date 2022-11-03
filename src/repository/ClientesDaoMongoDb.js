import Cliente from '../models/Cliente.js';
import { ConectarMongoDb } from './ConectarMongoDb.js';
class ClienteDaoMongoDb {
    constructor() {
        this.conectarMongoDb = new ConectarMongoDb();
    }
    async add(elemento) {
        const db = await this.conectarMongoDb.conectar();
        if (db != undefined) {
            const collection = db.collection('clientes');
            await collection.insertOne(elemento);
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(true);
    }
    async findAll() {
        const db = await this.conectarMongoDb.conectar();
        const clientes = new Array;
        if (db != undefined) {
            const collection = db.collection('clientes');
            const findResult = (await collection.find({}).toArray());
            findResult.forEach(e => clientes.push(new Cliente(e.numero)));
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(clientes);
    }
    async get(clave) {
        const db = await this.conectarMongoDb.conectar();
        const cliente = new Cliente(0);
        if (db != undefined) {
            const collection = db.collection('clientes');
            const findResult = await collection.findOne({ numero: clave });
            if (findResult != null) {
                cliente.setNumer(findResult.numero);
            }
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(cliente);
    }
    async delete(clave) {
        const db = await this.conectarMongoDb.conectar();
        if (db != undefined) {
            const collection = db.collection('clientes');
            await collection.deleteMany({ numero: clave });
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(true);
    }
}
export { ClienteDaoMongoDb };
