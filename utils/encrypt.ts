import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Request,Response,NextFunction} from 'express'
import { Usuario } from '../models/Usuario';


interface IPayload {
     id : number,
     nombre : string,
     email : 'string',
     iat : number
}

// interface RequestWithUserRole extends Request {
//      user : IPayload,
// }
 
export const encryptPassword = async(password : string):Promise<string> => {
     const salt = await bcrypt.genSalt(10);
     return await bcrypt.hash(password,salt);
}

export const comparePassword = async(password: string,savePassword: any) : Promise<Boolean> => {
     return await bcrypt.compare(password,savePassword);
}

export const generateSignature = (payload:any) =>{
      return jwt.sign(payload,process.env.TOKEN_SECRET|| "alkemy");
}


export const verifyToken = (req:Request,res: Response,next:NextFunction) => {
       const token: any  = req.get('Authorization');
       try {
            if(token){
               const payload = <IPayload> jwt.verify(token.split(" ")[1],process.env.TOKEN_SECRET|| "alkemy") ;
               req.user = payload;
              return next();
            }
            return res.status(401).json({message : "Access Denied"});
       }catch(error){
          console.log(error)
       }
     }

