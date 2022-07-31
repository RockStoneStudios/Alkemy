import {Router} from 'express';
import {getAllCharacter,createMovie,deleteMovie,updateMovie,querySearch} from '../peliculaCases/peliculaController';

const router = Router();

router.post('/create',createMovie);
router.get('/',querySearch);
router.get('/',getAllCharacter);
router.delete('/:id',deleteMovie);
router.put('/:id',updateMovie);


export default router;