import { Op } from "sequelize";
import { Genero } from "../models/Genero";
import { Pelicula } from "../models/Pelicula";

export const create = async (payload : any) => {
    const pelicula = await Pelicula.create(payload);
    return pelicula;
}

export const getAll= async () => await Pelicula.findAll({ include :{ model : Genero, attributes : ['nombre'] } ,attributes : {exclude : ["id","calificacion","GeneroId"]}});

export const getById = async (id : string) => await  Pelicula.findByPk(id);

export const deleteById = async (id : string) => await Pelicula.destroy({where : {id : id}});

export const updateById = async (payload : any, id : string) => await Pelicula.update(payload, {where : {id : id}});

export const querySearch = async(date? : any) => await Pelicula.findOne({where : {titulo :date}});

