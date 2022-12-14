"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySearch = exports.getByIdCharacter = exports.updateCharacter = exports.deleteCharacter = exports.getAllCharacter = exports.create = void 0;
const create_1 = require("./createPersonaje/create");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return create_1.create; } });
const getAll_1 = require("./getAllPersonaje/getAll");
Object.defineProperty(exports, "getAllCharacter", { enumerable: true, get: function () { return getAll_1.getAllCharacter; } });
const delete_1 = require("./deletePersonaje/delete");
Object.defineProperty(exports, "deleteCharacter", { enumerable: true, get: function () { return delete_1.deleteCharacter; } });
const update_1 = require("./updatePersonaje/update");
Object.defineProperty(exports, "updateCharacter", { enumerable: true, get: function () { return update_1.updateCharacter; } });
const getById_1 = require("./getByIdPersonaje/getById");
Object.defineProperty(exports, "getByIdCharacter", { enumerable: true, get: function () { return getById_1.getByIdCharacter; } });
const otherSearch_1 = require("./otherSearchPersonaje/otherSearch");
Object.defineProperty(exports, "querySearch", { enumerable: true, get: function () { return otherSearch_1.querySearch; } });
//# sourceMappingURL=personajeController.js.map