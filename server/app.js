import express, { json } from 'express'
import postsRoutes from './routes/posts.routes.js';
import fileUpload from 'express-fileupload';
// import { fstat } from 'fs-extra';

const app = express();

// Middlewares 
app.use(express.json()) // Para poder utilizar json en los request a la base de datos 
app.use(fileUpload())

//Rutas
app.use(postsRoutes)

export default app