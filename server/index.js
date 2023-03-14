import express from 'express'
import postsRoutes from './routes/posts.routes.js';
import {connectDB} from './db.js'
import {PORT} from './config.js'



const app = express();
app.use(postsRoutes)
app.listen(PORT)
connectDB()

console.log('Servidor corriendo en puerto', PORT)
