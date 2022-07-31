import { Request, Response } from 'express';
import * as Repository from '../../repositories/characterRepository';


// crear 

export const create = async (req : Request , res : Response) =>{ 
      const {nombre,imagen,edad,peso,historia} = req.body;
     try {
        const personaje = await Repository.getByName(nombre);
        if(!personaje){
             const nuevoPersonaje = await Repository.create({nombre,imagen,edad,peso,historia});
              return res.status(201).json({message : "Character already has been with successfull"})
          }
          return res.status(400).json({message : "There is a registered character with that name"});
     }catch(error){
        console.log(error)
     }
    
     
}

//mostrar 


//mostrar por Id

//Delete por Id


//Update por Id