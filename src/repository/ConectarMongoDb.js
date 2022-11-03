import { MongoClient } from 'mongodb';
console.log("-----------------> ", process.env.MONGO_URL);
class ConectarMongoDb {
    constructor() {
        this.url = process.env.MONGO_URL; // archivo .env
        this.client = new MongoClient(this.url);
        this.dbName = 'miproyecto';
    }
    async conectar() {
        try {
            await this.client.connect();
            console.log('conectado');
            const db = this.client.db(this.dbName);
            return db;
        }
        catch (e) {
            console.log(e);
        }
    }
    async desconectar() {
        await this.client.close();
        console.log('desconectado');
    }
}
export { ConectarMongoDb };
