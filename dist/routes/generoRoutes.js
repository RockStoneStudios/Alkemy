"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generoController_1 = require("../generoCases/generoController");
const router = (0, express_1.Router)();
router.get('/', generoController_1.getAllGenre);
router.post('/create', generoController_1.create);
exports.default = router;
//# sourceMappingURL=generoRoutes.js.map