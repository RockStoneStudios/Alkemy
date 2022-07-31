import { Request, Response } from "express";
import * as Repository from '../../repositories/movieRepository';


export const updateMovie = async(req:Request,res: Response) =>{
     try{
        const updatePelicula = await Repository.updateById(req.body,req.params.id);
        return res.status(200).json({message : "Movie has been Update with Sucessfull"});
     }catch(error){
        console.log(error);
     }
}


