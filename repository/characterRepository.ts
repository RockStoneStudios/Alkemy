
import { Personaje } from "../models/Personaje";

export const create = async (payload : any) => {
    const personaje = await Personaje.create(payload);
    await personaje.save();
    return personaje;
}


export const getAll = async () => await Personaje.findAll({attributes : {exclude : ['edad','peso','historia',"id"]}});
   
export const getByName = async(nombre : string) => Personaje.findOne({where : {nombre : nombre}});

export const getById = async (id: string) => await Personaje.findOne({where : {id:id}});

export const deleteById = async (id : string) => await Personaje.destroy({where : {id : id}});

export const updateById = async (payload : any,id : string) => await Personaje.update(payload,{where : {id : id}});
