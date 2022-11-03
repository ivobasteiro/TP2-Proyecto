import express from 'express'
import Producto from '../models/Producto.js';
import ProductoService from '../service/ProductoService.js'

class ProductoController {

    static async findAll(req:express.Request,res:express.Response) {
        // res.send('get productos desde controller')
        const productoService : ProductoService = new ProductoService();
        res.send(await productoService.findAll());
    }

    static async add(req:express.Request,res:express.Response) {
        const productoService : ProductoService = new ProductoService();
        await productoService.add(req.body)
        res.send("ok");
    }

    static async get(req:express.Request,res:express.Response) {
        const productoService : ProductoService = new ProductoService();
        try {
            const producto:Producto = await productoService.get(req.params.id)
            res.send(producto);
        } catch {
            res.status(404).send("Id no encontrado ");
        }
    }

    static async delete(req:express.Request,res:express.Response) {
        const productoService : ProductoService = new ProductoService();
        if( await productoService.delete(req.params.id) ) {
            res.send("Borrado");
        } else {
            res.status(404).send("Id no encontrado ");
        }
    }

}

export default ProductoController