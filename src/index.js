console.log("Sistema");
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ProductoRouter from './router/ProductoRouter.js';
const app = express();
app.use(cors());
app.use(bodyParser.json());
new ProductoRouter(app, "/api/productos");
app.get('/api/ping', (req, res) => {
    res.send('pong');
});
app.listen(3001, () => {
    console.log('Sistema en escuchando en puerto 3001');
});
/*
import { ProductoDaoMongoDb } from "./repository/ProductoDaoMongoDb.js";
import Producto from "./models/Producto.js";

const productoDaoMongoDb : ProductoDaoMongoDb = new ProductoDaoMongoDb();

//const producto: Producto = new Producto(1,"Tele",120000);
//await productoDaoMongoDb.add(producto);
console.log(await productoDaoMongoDb.findAll());
*/
/*
import {ClienteDaoMongoDb} from './repository/ClientesDaoMongoDb.js'
import Cliente from './models/Cliente.js'
const clienteDaoMongoDb : ClienteDaoMongoDb = new ClienteDaoMongoDb();
// const cliente:Cliente = new Cliente(45645);
// await clienteDaoMongoDb.add(cliente);
console.log(await clienteDaoMongoDb.delete(25235));
console.log(await clienteDaoMongoDb.findAll());
console.log(await clienteDaoMongoDb.get(45645));
*/
/*
import {ConectarMongoDb} from './repository/ConectarMongoDb.js'
const conexionMongoDb : ConectarMongoDb = new ConectarMongoDb();
conexionMongoDb.conectar();
*/
// clase anterior
/*
import Cliente from './models/Cliente.js'
const cliente:Cliente = new Cliente(25235);
console.log(cliente.getNumero());
*/ 
