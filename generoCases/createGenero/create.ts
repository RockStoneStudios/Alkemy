import { Request,Response } from "express";
import * as Repository from '../../repositories/genreRepository';


export const create = async (req:Request,res: Response)=>{
    try{
        const genero = await Repository.create(req.body);
        return res.status(200).json({message : "Genre has been created with Successfull"})
    }catch(error){
        console.log(error);
    }

} 