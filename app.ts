import express, {Application} from 'express';
import * as userRouter from './routes/userRoutes';
import * as personajeRouter from './routes/personajeRoutes';
import * as peliculaRouter from './routes/peliculasRoutes';
import * as GeneroRouter from './routes/generoRoutes';
import cors from 'cors';
import db from './db/connection';

class Server {
    private app : Application;
    private port : string;
    private apiPaths = {
         usuarios : "/api/usuarios",
         personajes : '/api/characters',
         peliculas : '/api/movies',
         generos : '/api/genres'
    }

    constructor() {
         this.app = express();
         this.port = process.env.PORT || '3000';
         // Middlewares
         this.dbConnection();
         this.middlewares();

         // Routes
         this.routes();

         this.listen();
    }

     //Conecct Database

     dbConnection() {
    
              db.sync({force : false}).then(()=>{
                console.log('Connected Database Sucessfull');
              }).catch(error => {
                 console.log(error)
              })
    }

     middlewares() {
         this.app.use(cors());
         this.app.use(express.json());
     }

    listen(){
        this.app.listen(this.port,()=>{
             console.log('Server Starting on Port -> '+this.port+' . . .');
        })
    }
    
    routes() {
        this.app.use(this.apiPaths.usuarios,userRouter.default);
        this.app.use(this.apiPaths.personajes,personajeRouter.default);
        this.app.use(this.apiPaths.peliculas,peliculaRouter.default);
        this.app.use(this.apiPaths.generos,GeneroRouter.default);
    }
}

const server = new Server();