import { Request,Response } from "express";
import * as Repository from '../../repositories/characterRepository';


export const querySearch = async (req:Request,res:Response) =>{ 
 const {edad,nombre} = req.query;
 let personaje;
    try{
        if(!nombre) {

             personaje = await Repository.getByQuerys(edad,'');
            return res.status(200).json(personaje);
        }
        if(!edad){
            personaje = await Repository.getByQuerys(0,nombre);
            return res.status(200).json(personaje);
        }
        if(!personaje) return res.status(404).json({message : "There are no characters with these parameters"});
        return res.status(200).json(personaje);
    }catch(error){
        console.log(error);
    }
}


// export const querySearchEdad = async (req:Request,res:Response) =>{ 
//     console.log(req.query.edad);
//     console.log("-------------------------------------------");
//    try{
//        const personaje = await Repository.getByQuerys(req.query.edad);
//        if(!personaje) return res.status(404).json({message : "There are no characters with these parameters"});
//        return res.status(200).json(personaje);
//    }catch(error){
//        console.log(error);
//    }
// }
