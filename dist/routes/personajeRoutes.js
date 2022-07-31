"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personajeController_1 = require("../personajeCases/personajeController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/create', personajeController_1.create);
router.get('/query', personajeController_1.querySearch);
router.get('/', personajeController_1.getAllCharacter);
router.get('/:id', personajeController_1.getByIdCharacter);
router.delete('/:id', personajeController_1.deleteCharacter);
router.put('/:id', personajeController_1.updateCharacter);
exports.default = router;
//# sourceMappingURL=personajeRoutes.js.map