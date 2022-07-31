import {Model,DataTypes,Sequelize} from 'sequelize';
import sequelize from '../db/connection';
import {Pelicula} from './Pelicula';
 interface IPersonaje  {
    id : number
    nombre : string,
    imagen : string,
    edad : number,
    peso : number,
    historia : string,
    
    
}

class Personaje extends Model <IPersonaje>{
    declare id : number;
    declare nombre : string;
    declare imagen : string;
    declare edad : number;
    declare peso : number;
    declare historia : string;
 

}

 Personaje.init({
     id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
     },
     nombre : {
        type : DataTypes.STRING,
        allowNull : false
     },
     imagen : {
        type : DataTypes.STRING(1234),
       
     },
     edad : {
        type : DataTypes.INTEGER,
        allowNull : false
     },
     peso : {
        type : DataTypes.INTEGER,
        defaultValue : 50
     },
     historia : {
        type : DataTypes.STRING(1234),

     }
 },{
    timestamps : false,
    sequelize,
    modelName : 'Personaje'
 });

 Personaje.belongsToMany(Pelicula,{through : "PersonajePelicula"});
Pelicula.belongsToMany(Personaje, {through : "PersonajePelicula"});


 export {Personaje}
