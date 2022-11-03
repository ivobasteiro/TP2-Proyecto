import express from 'express'
import Pelicula from '../models/Pelicula.js';
import PeliculaService from '../service/PeliculaService.js';

class PeliculaController {

    static async findAll(req:express.Request,res:express.Response) {
        // res.send('get productos desde controller')
        const peliculaService : PeliculaService = new PeliculaService();
        res.send(await peliculaService.findAll());
    }

    static async add(req:express.Request,res:express.Response) {
        const peliculaService : PeliculaService = new PeliculaService();
        await peliculaService.add(req.body)
        res.send("ok");
    }

    static async get(req:express.Request,res:express.Response) {
        const peliculaService : PeliculaService = new PeliculaService();
        try {
            const pelicula:Pelicula = await peliculaService.get(req.params.id)
            res.send(pelicula);
        } catch {
            res.status(404).send("Id no encontrado ");
        }
    }

    static async delete(req:express.Request,res:express.Response) {
        const peliculaService : PeliculaService = new PeliculaService();
        if( await peliculaService.delete(req.params.id) ) {
            res.send("Borrado");
        } else {
            res.status(404).send("Id no encontrado ");
        }
    }

}

export default PeliculaController