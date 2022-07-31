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
exports.getByQuerys = exports.updateById = exports.deleteById = exports.getById = exports.getByName = exports.getAll = exports.create = void 0;
const sequelize_1 = require("sequelize");
const Personaje_1 = require("../models/Personaje");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const personaje = yield Personaje_1.Personaje.create(payload);
    yield personaje.save();
    return personaje;
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return yield Personaje_1.Personaje.findAll({ attributes: { exclude: ['edad', 'peso', 'historia', "id"] } }); });
exports.getAll = getAll;
const getByName = (nombre) => __awaiter(void 0, void 0, void 0, function* () { return Personaje_1.Personaje.findOne({ where: { nombre: nombre } }); });
exports.getByName = getByName;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Personaje_1.Personaje.findOne({ where: { id: id } }); });
exports.getById = getById;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Personaje_1.Personaje.destroy({ where: { id: id } }); });
exports.deleteById = deleteById;
const updateById = (payload, id) => __awaiter(void 0, void 0, void 0, function* () { return yield Personaje_1.Personaje.update(payload, { where: { id: id } }); });
exports.updateById = updateById;
const getByQuerys = (edad, nombre) => __awaiter(void 0, void 0, void 0, function* () { return yield Personaje_1.Personaje.findOne({ where: { [sequelize_1.Op.or]: [{ nombre: nombre }, { edad: edad }] } }); });
exports.getByQuerys = getByQuerys;
//# sourceMappingURL=characterRepository.js.map