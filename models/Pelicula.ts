import {Model,Sequelize,DataTypes, NOW, DATE} from 'sequelize';
import sequelize from '../db/connection';
import {Genero} from './Genero';
  interface IPelicula {
     id : Number,
     imagen : String,
     titulo : Number,
     fecha_creacion : any,
     calificacion : Number

  }

class Pelicula extends Model <IPelicula> {
    declare id : number;
    declare imagen : string;
    declare titulo : string;
    declare fecha_creacion : any;
    declare calificacion : number;
}
   Pelicula.init({
      id : {
        type : DataTypes.INTEGER,
         primaryKey : true,
         allowNull : false,
         autoIncrement : true
      },
       imagen : {
         type : DataTypes.STRING,
         defaultValue : "https://pbs.twimg.com/profile_images/1068224794355736576/QERHmy7l_400x400.jpg",
         allowNull : false
       },
         titulo : {
          type : DataTypes.STRING,
          allowNull : false,
          unique : true
       },
       fecha_creacion : {
        type : DataTypes.STRING,
        
       },
       calificacion : {
         type : DataTypes.INTEGER,
         defaultValue : 1,
        validate : {
            min : 1,
            max : 5
        }
       }

   },{
        timestamps : false,
        sequelize,
        modelName : 'Pelicula'
   });

   Pelicula.belongsTo(Genero);
   Genero.hasMany(Pelicula);

   export {Pelicula}