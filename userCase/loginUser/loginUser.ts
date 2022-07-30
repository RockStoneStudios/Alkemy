import {Request,Response} from 'express';
import * as Repository from '../../repository/userRepository';
import {comparePassword,generateSignature} from '../../utils/encrypt';
import { Usuario } from '../../models/Usuario';



export const login = async(req:Request,res: Response) => {
     const {email,password} = req.body;
     const userExist = await Repository.getByEmail(email);

     if(!userExist) return res.status(401).json({message : "User has not been register!!"});
      const passwordCompare = await comparePassword(password,userExist.password);
      if(!passwordCompare) return res.status(403).json({message : "Password  do not match"});
      const {id,nombre} = userExist;
      const token = generateSignature({id : id, nombre : nombre , email : email});
      return res.status(200).json({message : "Login Sucessfull", token});
}

