import {Router} from 'express';
import {getAllGenre,create} from '../generoCases/generoController';

const router = Router();


router.get('/',getAllGenre);
router.post('/create',create);


export default router;