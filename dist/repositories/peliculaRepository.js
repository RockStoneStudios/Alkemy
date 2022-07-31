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
exports.updateById = exports.deleteById = exports.getById = exports.getAll = exports.create = void 0;
const Pelicula_1 = require("../models/Pelicula");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const pelicula = yield Pelicula_1.Pelicula.create(payload);
    return pelicula;
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return yield Pelicula_1.Pelicula.findAll(); });
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Pelicula_1.Pelicula.findByPk(id); });
exports.getById = getById;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield Pelicula_1.Pelicula.destroy({ where: { id: id } }); });
exports.deleteById = deleteById;
const updateById = (payload, id) => __awaiter(void 0, void 0, void 0, function* () { return yield Pelicula_1.Pelicula.update(payload, { where: { id: id } }); });
exports.updateById = updateById;
//# sourceMappingURL=peliculaRepository.js.map