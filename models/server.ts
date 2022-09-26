import express, { Application } from 'express';
import userRoutes from '../routes/users';
import cors from 'cors'
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';

        // Conectar db;
        this.dbConnection();
        
        // Middlewares;
        this.middlewares();

        // Definir rutas;
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares() {
        // CORS;
        this.app.use(cors());

        // Lectura del Body;
        this.app.use(express.json());

        // Carpeta Pública;
        this.app.use(express.static('public'));
    }
    
    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Server running on port:', + this.port);
        })
    }
}

export default Server;