"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Genero_1 = require("./Genero");
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
        defaultValue: "https://pbs.twimg.com/profile_images/1068224794355736576/QERHmy7l_400x400.jpg",
        allowNull: false
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    fecha_creacion: {
        type: sequelize_1.DataTypes.STRING,
    },
    calificacion: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
            min: 1,
            max: 5
        }
    }
}, {
    timestamps: false,
    sequelize: connection_1.default,
    modelName: 'Pelicula'
});
Pelicula.belongsTo(Genero_1.Genero);
Genero_1.Genero.hasMany(Pelicula);
//# sourceMappingURL=Pelicula.js.map