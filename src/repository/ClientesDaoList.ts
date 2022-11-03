import Dao from './Dao.js'
import Cliente from '../models/Cliente.js'

class ClienteDaoList implements Dao<Cliente,Number>{

    private clientes: Array<Cliente> = [];

    public add (elemento: Cliente) : Promise<Boolean> {
        this.clientes.push(elemento);
        return Promise.resolve(true);
    }
    findAll () : Promise<Cliente[]> {
        return Promise.resolve(this.clientes);
    }
    get (clave: Number) : Promise<Cliente> {
        return Promise.resolve(
            this.clientes.filter(e => e.getNumero()==clave)[0] );
    }
    delete (clave: Number) : Promise<Boolean> {
        this.clientes = this.clientes.filter(e => e.getNumero() != clave)
        return Promise.resolve(true)
    }

}