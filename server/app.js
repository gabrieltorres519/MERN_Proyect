import express, { json } from 'express'
import postsRoutes from './routes/posts.routes.js';

const app = express();

// Middlewares 
app.use(express.json()) // Para poder utilizar json en los request a la base de datos 
app.use(postsRoutes)

export default app