class Producto {
    private id: Number;
    private nombre: String;
    private importe: Number;

    constructor(id: Number,nombre: String,importe: Number) {
        this.id = id;
        this.nombre = nombre;
        this.importe = importe;
    }

    public setId(id:Number) {
        this.id = id;
    }
    public getId() : Number {
        return this.id;
    }

    public setNombre(nombre:String) {
        this.nombre = nombre;
    }
    public getNombre() : String {
        return this.nombre;
    }

    public setImporte(importe:Number) {
        this.importe = importe;
    }
    public getImporte() : Number {
        return this.importe;
    }

}

export default Producto