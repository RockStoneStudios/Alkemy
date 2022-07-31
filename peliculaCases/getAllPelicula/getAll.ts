import {Request,Response} from 'express';
import * as Repository from '../../repositories/movieRepository';


export const getAllCharacter = async(req:Request,res:Response) =>{ 
   try{
    const peliculas = await Repository.getAll();
    return res.status(200).json(peliculas)
     }catch(error){
        console.log(error);
     }
   }

