"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
class Pelicula extends sequelize_1.Model {
}
exports.Pelicula = Pelicula;
Pelicula.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fecha_creacion: {
        type: sequelize_1.DataTypes.DATE,
    },
    calificacion: {
        type: sequelize_1.DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
}, {
    timestamps: true,
    sequelize: connection_1.default,
    modelName: 'Pelicula'
});
//# sourceMappingURL=Pelicula.js.map