import {Sequelize} from 'sequelize';


const db = new Sequelize('disney','root','3105060237',{
    host : 'localhost',
    dialect : 'mysql',
});

export default db;