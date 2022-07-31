"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querySearch = exports.updateMovie = exports.deleteMovie = exports.createMovie = exports.getAllCharacter = void 0;
const getAll_1 = require("./getAllPelicula/getAll");
Object.defineProperty(exports, "getAllCharacter", { enumerable: true, get: function () { return getAll_1.getAllCharacter; } });
const create_1 = require("./createPeliculas/create");
Object.defineProperty(exports, "createMovie", { enumerable: true, get: function () { return create_1.createMovie; } });
const delete_1 = require("./deletePeliculas/delete");
Object.defineProperty(exports, "deleteMovie", { enumerable: true, get: function () { return delete_1.deleteMovie; } });
const update_1 = require("./updatePeliculas/update");
Object.defineProperty(exports, "updateMovie", { enumerable: true, get: function () { return update_1.updateMovie; } });
const querySearch_1 = require("./querySearchPeliculas/querySearch");
Object.defineProperty(exports, "querySearch", { enumerable: true, get: function () { return querySearch_1.querySearch; } });
//# sourceMappingURL=peliculaController.js.map