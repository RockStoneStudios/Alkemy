"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Pelicula_1 = require("./Pelicula");
class Personaje extends sequelize_1.Model {
}
exports.Personaje = Personaje;
Personaje.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING(1234),
    },
    edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    peso: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 50
    },
    historia: {
        type: sequelize_1.DataTypes.STRING(1234),
    }
}, {
    timestamps: false,
    sequelize: connection_1.default,
    modelName: 'Personaje'
});
Personaje.belongsToMany(Pelicula_1.Pelicula, { through: "PersonajePelicula" });
Pelicula_1.Pelicula.belongsToMany(Personaje, { through: "PersonajePelicula" });
//# sourceMappingURL=Personaje.js.map