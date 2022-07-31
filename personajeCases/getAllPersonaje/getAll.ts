import {Request,Response} from 'express'
import * as Repository from '../../repositories/characterRepository';

export const getAllCharacter = async(req:Request,res:Response) => {
     try {
         const personajes = await Repository.getAll();
         return res.status(200).json(personajes);
     }catch(error){
        console.log(error);
     }
}

