import {Model,Sequelize,DataTypes} from 'sequelize';
import sequelize from '../db/connection';

interface IGenero {
    id : number,
    nombre : string,
    imagen : string
}

class Genero extends Model <IGenero> {
     declare id : number;
     declare nombre : string;
     declare imagen : string;
     
}

 Genero.init({
     id : {
          type : DataTypes.INTEGER,
          primaryKey : true,
           allowNull : false,
          autoIncrement : true
     },
     nombre : {
        type : DataTypes.STRING,
        allowNull : false,
       
     },
     imagen : {
        type : DataTypes.STRING,
      
     }
 },{
     timestamps : false,
     sequelize,
     modelName : "Genero"
 })

 export {Genero}