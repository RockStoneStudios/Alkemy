import {Pelicula} from './Pelicula';
import {Genero} from './Genero';
import { Personaje } from './Personaje';



//Una Pelicula puede pertenecer a un genero* Un Genero tiene muchas peliculas 

Pelicula.belongsTo(Genero);
Genero.hasMany(Pelicula);


// Un Personaje puede pertenecer a una o muchas peliculas * Una Pelicula puede tener uno o muchos personajes

Personaje.belongsToMany(Pelicula,{through : "PersonajePelicula"});
Pelicula.belongsToMany(Personaje, {through : "PersonajePelicula"});


