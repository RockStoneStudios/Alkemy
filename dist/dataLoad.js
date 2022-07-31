"use strict";
// import {Personaje} from './models/Personaje';
// import { Genero } from './models/Genero';
// import { Pelicula } from './models/Pelicula';
// import { Usuario } from './models/Usuario';
// import sequelize from './db/connection';
// const usuarios = [
//      {id : 1,nombre: "Elon Musk", email : "soyElonMusk@gmail.com", password: "1234567E"},
//      {id : 2,nombre: "Bill Gates", email : "soyBillGates@outlook.com", password: "1234567B"},
// ]
// const generos = [
//       {id : 1,nombre : "Accion",imagen :"accion.png"},
//       {id : 2,nombre : "Comedia",imagen :"comedia.png"},
//       {id : 3,nombre : "Romantica",imagen :"romantica.png"},
//       {id : 4,nombre : "Aventura",imagen :"aventura.png"},
//       {id : 5,nombre : "Culto",imagen :"culto.png"}
// ]
// const peliculas = [
//       {id : 1,titulo: "Titanic",imagen : "titanic.png", fecha_creacion : "12/04/1998",calificacion : 5,GeneroId : 3},
//       {id : 2,titulo: "Ready player one",imagen : "ready.png", fecha_creacion : "10/12/2018",calificacion : 4,GeneroId : 1},
//       {id : 3,titulo: "Once upon a time in Hollywood",imagen : "hollywood.png", fecha_creacion : "24/01/2020",calificacion : 5,GeneroId : 5}
// ]
//  const personajes = [
//            {id : 1,nombre : "Leonardo di Caprio", imagen : "leonard.png", edad :48,peso : 78,historia : "Leonardo Wilhelm DiCaprio ​ es un actor, productor de cine y ambientalista estadounidense. Ha recibido numerosos premios entre los que destacan un Óscar al mejor actor"},
//            {id : 2,nombre : "Steven Spilberg", imagen : "spilberg.jpg", edad : 68, peso : 76,historia : "Steven Allan Spielberg es un director, guionista y productor de cine estadounidense.​ Se lo considera uno de los pioneros de la era del Nuevo Hollywood y es también uno de los directores más reconocidos y populares de la industria cinematográfica mundial.​"},
//            {id : 3,nombre : "Brad Pitt", imagen : "brad.png", edad : 49, peso : 77, historia : "Steven Allan Spielberg es un director, guionista y productor de cine estadounidense.​ Se lo considera uno de los pioneros de la era del Nuevo Hollywood y es también uno de los directores más reconocidos y populares de la industria cinematográfica mundial.​"}
//  ]
//  sequelize.sync({force : false}).then(()=>{
//      console.log('Database Connected Successfull');
//  }).then(()=>{
//      //Cargar Usuarios
//      usuarios.forEach(usuario=> Usuario.create(usuario));
//  }).then(()=>{
//      //Cargar Peliculas
//      peliculas.forEach(pelicula => Pelicula.create(pelicula));
//  }).then(()=>{
//       //Cargar Genero
//       generos.forEach(genero => Genero.create(genero));
//  }).then(()=>{
//      //Cargar Personajes
//      personajes.forEach(personaje => Personaje.create(personaje))
//  }).then(async ()=> {
//      let pelicula = await Pelicula.create({
//           titulo: "Titanic",
//           imagen : "titanic.png",
//            fecha_creacion : "12/04/1998",
//            calificacion : 5,
//            GeneroId : 3
//      })
//  })
//# sourceMappingURL=dataLoad.js.map