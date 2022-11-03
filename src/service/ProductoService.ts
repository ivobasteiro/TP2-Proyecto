import { ProductoDaoMongoDb } from "../repository/ProductoDaoMongoDb.js"
import Producto from "../models/Producto.js";

class ProductoService {

    productoDaoMongoDb : ProductoDaoMongoDb = new ProductoDaoMongoDb();

    async findAll()  : Promise<Producto[]> {
        return this.productoDaoMongoDb.findAll();
    }

    async add(payLoad : any) {
        await this.productoDaoMongoDb.add(new Producto(Number(payLoad.id),payLoad.nombre,Number(payLoad.importe)));
    }

    async get(clave: any)  : Promise<Producto> {
        clave = Number(clave);
        const producto : Producto = await this.productoDaoMongoDb.get(clave);
        if(producto.getId()==0) {
            throw "No existe producto"
        }
        return producto;
    }

    // Evitar borrados fisicos
    // usar borrados logicos
    async delete(clave: any)  : Promise<Boolean> {
        clave = Number(clave);
        return await this.productoDaoMongoDb.delete(clave);
    }

    static enviarNotificacion() {
        // tarea compleja
        // leer de la base de datos
        // armar una respuesta
        // enviar
    }

}

export default ProductoService


// router  ->  controller  ->  servicios -> repository (dao)