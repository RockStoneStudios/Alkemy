import {Request,Response} from 'express';
import * as userRepository from '../../repository/userRepository';
import {encryptPassword} from '../../utils/encrypt';


export const register = async(req : Request, res : Response) =>{
        const {nombre,email,password} = req.body;
       try {
           const userExist = await userRepository.getByEmail(email);
            if(!userExist) {
                const passwordEncrypt = await encryptPassword(password);
                 console.log( password,passwordEncrypt);
                const newUser = await userRepository.create({nombre,email,password});

                return res.status(201).json({message : "User Register Sucessfull",newUser});
            }else {
                return res.status(400).json({message : "User has been Register with this Email!!"})
            }
       }catch(error){
        console.log(error);
       }
}