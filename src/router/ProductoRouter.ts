import express from 'express'
import PeliculaController from '../controller/PeliculaController.js';

class ProductoRouter {
    app: express.Application;
    direccion: string;
    
    constructor(app: express.Application,direccion: string) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion)
            .get(PeliculaController.findAll)
            .post(PeliculaController.add)

        this.app.route(this.direccion + "/:id")
            .get(PeliculaController.get)
            .delete(PeliculaController.delete)
            
        return this.app;
            //.get(PeliculaController.findAll)
            /*
            .get( (req,res) => {
                res.send('get productos')
            })
            */
    }
}

export default ProductoRouter