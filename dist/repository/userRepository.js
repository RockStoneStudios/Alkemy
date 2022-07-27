"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateById = exports.deleteById = exports.getByEmail = exports.getById = exports.getAll = exports.create = void 0;
const Usuario_1 = require("../models/Usuario");
const encrypt_1 = require("../utils/encrypt");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    payload.password = yield (0, encrypt_1.encryptPassword)(payload.password);
    const user = yield Usuario_1.Usuario.create(payload);
    yield user.save();
    return user;
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return yield Usuario_1.Usuario.findAll(); });
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Usuario_1.Usuario.findOne({ where: { id: id } }); });
exports.getById = getById;
const getByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () { return yield Usuario_1.Usuario.findOne({ where: { email: email } }); });
exports.getByEmail = getByEmail;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Usuario_1.Usuario.destroy({ where: { id: id } }); });
exports.deleteById = deleteById;
const updateById = (id, payload) => __awaiter(void 0, void 0, void 0, function* () { return yield Usuario_1.Usuario.update({ payload }, { where: { id: id } }); });
exports.updateById = updateById;
//# sourceMappingURL=userRepository.js.map