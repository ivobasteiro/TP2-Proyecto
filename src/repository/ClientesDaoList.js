class ClienteDaoList {
    constructor() {
        this.clientes = [];
    }
    add(elemento) {
        this.clientes.push(elemento);
        return Promise.resolve(true);
    }
    findAll() {
        return Promise.resolve(this.clientes);
    }
    get(clave) {
        return Promise.resolve(this.clientes.filter(e => e.getNumero() == clave)[0]);
    }
    delete(clave) {
        this.clientes = this.clientes.filter(e => e.getNumero() != clave);
        return Promise.resolve(true);
    }
}
export {};
