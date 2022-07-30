import { where } from "sequelize/types";
import { Genero } from "../models/Genero";
import { Pelicula } from "../models/Pelicula";
import { Usuario } from "../models/Usuario";
import {encryptPassword} from '../utils/encrypt';
import { Personaje } from "../models/Personaje";

export const create = async(payload : any) => {
      if(payload.password){

            payload.password = await encryptPassword(payload.password);
      }
      const user = await  Usuario.create(payload);
      await user.save();
      return user;

} 

export const getAll = async ()=> await Usuario.findAll();

export const getById = async (id :any) => await Usuario.findOne({where : {id : id}}) ;

export const getByEmail = async (email : any) => await Usuario.findOne({where : {email : email}});

export const deleteById = async (id : any) => await Usuario.destroy({where : {id : id}});

export const updateById = async (id: any, payload : any) => await Usuario.update(payload, {where:{id : id}});


// export const getByName = async(nombre : string) => await Genero.findOne({where : {nombre : nombre}});

