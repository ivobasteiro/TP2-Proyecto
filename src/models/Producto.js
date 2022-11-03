class Producto {
    constructor(id, nombre, importe) {
        this.id = id;
        this.nombre = nombre;
        this.importe = importe;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setImporte(importe) {
        this.importe = importe;
    }
    getImporte() {
        return this.importe;
    }
}
export default Producto;
