import {Request, Response} from 'express';
import * as Repository from '../../repository/characterRepository';

export const deleteCharacter = async (req:Request,res : Response)=> {
   try{
    const personaje  = await Repository.deleteById(req.params.id);
     return res.status(201).json({message : "Character has been delete with Successfull!!"});
   }catch(error){
     console.log(error);
   }
  

}