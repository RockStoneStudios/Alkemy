import {Request,Response} from 'express';
import * as Repository from '../../repositories/genreRepository';


export const getAllGenre = async (req:Request,res: Response)=> {
    try{
        const generos = await Repository.getAll();
        return res.status(200).json(generos);
    }catch(error){
        console.log(error);
    }
}
