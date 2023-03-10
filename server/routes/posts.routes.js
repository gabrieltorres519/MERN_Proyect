import { Router } from "express";

const router = Router();

router.get('/posts', (req,res)=> res.send('mostrar todo los posts'))


router.post('/posts', (req,res)=> res.send('Nuevo post'))
router.put('/post', (req,res)=> res.send('Modificar post'))
router.delete('/delete', (req,res)=> res.send('Eliminar post'))

router.get('/post:id', (req,res)=> res.send('Mostrar post'))


export default router