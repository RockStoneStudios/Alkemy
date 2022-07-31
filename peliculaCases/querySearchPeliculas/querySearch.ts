import {Request,Response} from 'express';
import * as Repository from '../../repositories/movieRepository';

export const querySearch = async (req:Request,res: Response)=> {
    try{
        const pelicula = await Repository.querySearch(req.query.nombre);
        return res.status(200).json(pelicula)
    }catch(error){
        console.log(error);
    }
}