import { Request, Response } from "express";
import * as Repository from '../../repository/characterRepository';


export const updateCharacter  =  async(req :Request, res : Response) => {
      
     try {
        //  const personaje = await Repository.getById(req.params.id);
        //  const updatePersonaje = {
        //     nombre : req.body.nombre ?  req.body.nombre : personaje?.nombre,
        //     imagen : req.body.imagen ? req.body.imagen : personaje?.imagen
        //  }

         const update = await Repository.updateById(req.body,req.params.id)
     }catch(error){
        console.log(error);
     }
}