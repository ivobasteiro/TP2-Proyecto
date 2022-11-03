import Dao from './Dao.js'
import Cliente from '../models/Cliente.js'
import { ConectarMongoDb } from './ConectarMongoDb.js';

class ClienteDaoMongoDb implements Dao<Cliente,Number>{
    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    public async add (elemento: Cliente) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('clientes');    
            await collection.insertOne(elemento);
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true);    
    }
    public async findAll () : Promise<Cliente[]> {
        const db = await this.conectarMongoDb.conectar();
        const clientes = new Array<Cliente>;                
        if(db != undefined) {
            const collection = db.collection('clientes');    
            const findResult = (await collection.find({}).toArray()) 
            findResult.forEach( e => clientes.push(new Cliente(e.numero)) );
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(clientes);
    }
    public async get (clave: Number) : Promise<Cliente> {
        const db = await this.conectarMongoDb.conectar();
        const cliente = new Cliente(0);                
        if(db != undefined) {
            const collection = db.collection('clientes');    
            const findResult = await collection.findOne({numero:clave})
            if(findResult != null) {
                cliente.setNumer(findResult.numero);
            }
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(cliente);
    }
    public async delete (clave: Number) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('clientes');    
            await collection.deleteMany({numero:clave});
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true)
    }

}

export {ClienteDaoMongoDb}