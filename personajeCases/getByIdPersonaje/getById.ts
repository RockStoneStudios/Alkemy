import {Request,Response} from 'express';
import * as Repository from '../../repositories/characterRepository';


export const getByIdCharacter = async(req:Request, res: Response) => {
      try {
        const personaje = await Repository.getById(req.params.id);
        if(!personaje) return res.status(404).json({message : "There is no registered Character with that id !!"});
        return res.status(201).json(personaje);
      }catch(error){
        console.log(error);
      }
}