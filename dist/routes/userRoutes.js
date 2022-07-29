"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../userCase/userController");
const encrypt_1 = require("../utils/encrypt");
const router = (0, express_1.Router)();
router.post('/register', userController_1.register);
router.post('/login', userController_1.login);
router.get('/', encrypt_1.verifyToken, (req, res) => {
    console.log("1) " + req.user.id, req.user.nombre);
});
exports.default = router;
//# sourceMappingURL=userRoutes.js.map