import {Model,Sequelize,DataTypes, NOW, DATE} from 'sequelize';
import sequelize from '../db/connection';
 
  interface IPelicula {
     id : Number,
     imagen : String,
     nombre : Number,
     fecha_creacion : any,
     calificacion : Number

  }

class Pelicula extends Model <IPelicula> {
    declare id : number;
    declare imagen : string;
    declare nombre : string;
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
       },
       nombre : {
          type : DataTypes.STRING,
          allowNull : false,
          unique : true
       },
       fecha_creacion : {
        type : DataTypes.DATE,
       },
       calificacion : {
         type : DataTypes.INTEGER,
        validate : {
            min : 1,
            max : 5
        }
       }

   },{
        timestamps : true,
        sequelize,
        modelName : 'Pelicula'
   });


   export {Pelicula}