import {Request,Response} from 'express';
import * as Repository from '../../repositories/movieRepository';

export const deleteMovie = async (req:Request , res : Response) => {
    try {
        const pelicula = await Repository.deleteById(req.params.id);
        return res.status(200).json({message : "Movie has been Delete with successfull"});
    }catch(error){
        console.log(error);
    }

}