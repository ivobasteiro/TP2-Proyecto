import ProductoService from '../service/ProductoService.js';
class ProductoController {
    static async findAll(req, res) {
        // res.send('get productos desde controller')
        const productoService = new ProductoService();
        res.send(await productoService.findAll());
    }
    static async add(req, res) {
        const productoService = new ProductoService();
        await productoService.add(req.body);
        res.send("ok");
    }
    static async get(req, res) {
        const productoService = new ProductoService();
        try {
            const producto = await productoService.get(req.params.id);
            res.send(producto);
        }
        catch (_a) {
            res.status(404).send("Id no encontrado ");
        }
    }
    static async delete(req, res) {
        const productoService = new ProductoService();
        if (await productoService.delete(req.params.id)) {
            res.send("Borrado");
        }
        else {
            res.status(404).send("Id no encontrado ");
        }
    }
}
export default ProductoController;
