class Cliente {

    private numero: Number; // private int numero

    constructor(numero: Number) {
        this.numero = numero;
    }

    public getNumero() : Number {
        return this.numero;
    }

    public setNumer(numero:Number) {
        this.numero = numero;
    }

}

export default Cliente