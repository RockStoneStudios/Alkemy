import { Genero } from "../models/Genero";


export const getAll = async () => await Genero.findAll();
export const create = async(payload: any) => {
    const genero = await Genero.create(payload);
    return genero
};

