import { Request,Response } from "express";
import * as Repository from '../../repositories/movieRepository';



export const createMovie = async(req:Request,res: Response) => {
      try {
        const peliculaCreada = await Repository.create(req.body);
        return res.status(201).json({message : "Movie has been created with Successfull"});
      }catch(error){
        console.log(error);
      }
   

}
