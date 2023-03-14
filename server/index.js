import express from 'express'
import postsRoutes from './routes/posts.routes.js';
import {connectDB} from './db.js'


const app = express();
app.use(postsRoutes)
app.listen(3000)
connectDB()

console.log('Servidor corriendo en puerto',3000)
