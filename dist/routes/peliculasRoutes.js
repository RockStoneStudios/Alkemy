"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peliculaController_1 = require("../peliculaCases/peliculaController");
const router = (0, express_1.Router)();
router.post('/create', peliculaController_1.createMovie);
router.get('/', peliculaController_1.querySearch);
router.get('/', peliculaController_1.getAllCharacter);
router.delete('/:id', peliculaController_1.deleteMovie);
router.put('/:id', peliculaController_1.updateMovie);
exports.default = router;
//# sourceMappingURL=peliculasRoutes.js.map