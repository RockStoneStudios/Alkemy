import {Router} from 'express';
import {register,login} from '../userCase/userController'
const router = Router();


router.post('/register',register);
router.post('/login',login);

export default router;