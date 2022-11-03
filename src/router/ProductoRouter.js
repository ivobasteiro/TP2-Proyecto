import ProductoController from '../controller/ProductoController.js';
class ProductoRouter {
    constructor(app, direccion) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion)
            .get(ProductoController.findAll)
            .post(ProductoController.add);
        this.app.route(this.direccion + "/:id")
            .get(ProductoController.get)
            .delete(ProductoController.delete);
        return this.app;
        //.get(ProductoController.findAll)
        /*
        .get( (req,res) => {
            res.send('get productos')
        })
        */
    }
}
export default ProductoRouter;
