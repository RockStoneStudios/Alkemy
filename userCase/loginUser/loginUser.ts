import {Request,Response} from 'express';
import * as userRepository from '../../repository/userRepository';
import {comparePassword} from '../../utils/encrypt';
import { Usuario } from '../../models/Usuario';


export const login = async(req:Request,res: Response) => {
     const {email,password} = req.body;
     const userExist = await userRepository.getByEmail(email);

     if(!userExist) return res.status(401).json({message : "User has not been register!!"});
      const passwordCompare = await comparePassword(password,userExist.password);
      console.log(passwordCompare);
}

