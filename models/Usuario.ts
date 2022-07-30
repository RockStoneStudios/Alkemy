import {Sequelize,DataTypes,Model} from 'sequelize';
import sequelize  from '../db/connection';

  interface IUsuario  {
    id: number,
    nombre: string,
    email : string,
    password : string
    
  };
  

class Usuario extends Model <IUsuario>{
    declare id : number;
    declare nombre : string;
    declare email : string;
    declare password : string;

}

    Usuario.init({
        id : {
            type : DataTypes.INTEGER,
             autoIncrement : true,
             primaryKey : true,
             allowNull : false
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
         timestamps : false,
        sequelize, 
        modelName : "Usuario"
    })


export { Usuario }