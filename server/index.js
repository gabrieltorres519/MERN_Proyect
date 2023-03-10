import express from 'express'
// import router from './routes/posts.routes';
import {getPosts} from '../controllers/controllers.js'
import {createPost} from '../controllers/controllers.js'
import {updatePost} from '../controllers/controllers.js'
import {deletePost} from '../controllers/controllers.js'
import {getPosts} from '../controllers/controllers.js'





// Utilización de las rutas


import { Router } from "express";
import { create } from 'domain';
import { createPost } from './controllers/controllers.js';

const router = Router();

router.get('/posts', getPosts)

router.post('/post',createPost)
router.put('/post2',updatePost)
router.delete('/delete',deletePost)

router.get('/post:id',getPost)










const app = express();

app.listen(3000)
app.use(router)
console.log('Servidor corriendo en puerto',3000)
