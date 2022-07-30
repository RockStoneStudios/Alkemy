"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personajeController_1 = require("../personajeCases/personajeController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/crear', personajeController_1.create);
router.get('/', personajeController_1.getAllCharacter);
router.delete('/:id', personajeController_1.deleteCharacter);
router.put('/:id', personajeController_1.updateCharacter);
exports.default = router;
//# sourceMappingURL=personajeRoutes.js.map