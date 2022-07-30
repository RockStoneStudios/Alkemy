import {create,getAllCharacter,deleteCharacter, updateCharacter} from '../personajeCases/personajeController';
import { Router } from 'express';

const router = Router();
router.post('/crear',create);
router.get('/',getAllCharacter);
router.delete('/:id',deleteCharacter);
router.put('/:id',updateCharacter);


export default router;
