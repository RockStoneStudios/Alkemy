"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter = __importStar(require("./routes/userRoutes"));
const personajeRouter = __importStar(require("./routes/personajeRoutes"));
const peliculaRouter = __importStar(require("./routes/peliculasRoutes"));
const GeneroRouter = __importStar(require("./routes/generoRoutes"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./db/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
            personajes: '/api/characters',
            peliculas: '/api/movies',
            generos: '/api/genres'
        };
        this.app = (0, express_1.default)();
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
        connection_1.default.sync({ force: false }).then(() => {
            console.log('Connected Database Sucessfull');
        }).catch(error => {
            console.log(error);
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server Starting on Port -> ' + this.port + ' . . .');
        });
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, userRouter.default);
        this.app.use(this.apiPaths.personajes, personajeRouter.default);
        this.app.use(this.apiPaths.peliculas, peliculaRouter.default);
        this.app.use(this.apiPaths.generos, GeneroRouter.default);
    }
}
const server = new Server();
//# sourceMappingURL=app.js.map