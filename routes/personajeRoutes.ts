import {create,getAllCharacter,deleteCharacter, updateCharacter,getByIdCharacter, querySearch} from '../personajeCases/personajeController';
import { Router } from 'express';

const router = Router();
router.post('/create',create);
router.get('/query',querySearch);
router.get('/',getAllCharacter);
router.get('/:id',getByIdCharacter)
router.delete('/:id',deleteCharacter);
router.put('/:id',updateCharacter);


export default router;
