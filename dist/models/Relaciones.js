"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pelicula_1 = require("./Pelicula");
const Genero_1 = require("./Genero");
const Personaje_1 = require("./Personaje");
//Una Pelicula puede pertenecer a un genero* Un Genero tiene muchas peliculas 
Pelicula_1.Pelicula.belongsTo(Genero_1.Genero);
Genero_1.Genero.hasMany(Pelicula_1.Pelicula);
// Un Personaje puede pertenecer a una o muchas peliculas * Una Pelicula puede tener uno o muchos personajes
Personaje_1.Personaje.belongsToMany(Pelicula_1.Pelicula, { through: "PersonajePelicula" });
Pelicula_1.Pelicula.belongsToMany(Personaje_1.Personaje, { through: "PersonajePelicula" });
//# sourceMappingURL=Relaciones.js.map