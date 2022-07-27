import {Sequelize,DataTypes,Model} from 'sequelize';
import sequelize  from '../db/connection';

type UserAttributes = {
    id: number,
    nombre: string,
    email : string,
    password : string
    // other attributes...
  };
  

class Usuario extends Model <UserAttributes>{
    declare id : number;
    declare nombre : string;
    declare email : string;
    declare password : string;

}

    Usuario.init({
        id : {
            type : DataTypes.NUMBER,
             autoIncrement : true,
             primaryKey : true
        },
        nombre :{
          type : DataTypes.STRING,
          allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
            
        }
        
    },{
        sequelize, 
        modelName : "Usuario"
    })


export { Usuario }