import {Router} from 'express';
import {register,login} from '../userCase/userController';
import {verifyToken} from '../utils/encrypt';
import {Request,Response} from 'express'
const router = Router();


router.post('/register',register);
router.post('/login',login);
router.get('/',verifyToken,(req: Request, res : Response)=>{
      console.log("1) "+req.user.id, req.user.nombre);
})

export default router;