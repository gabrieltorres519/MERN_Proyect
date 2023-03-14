import Post from "../models/Posts.js"
//Función que regresa todos los datos de Posts
export const getPosts = async (req,res)=> {
    const posts = await Post.find() 
    res.send('Todos post')
}
export const createPost = (req,res)=> {
    console.log(req.body)
    res.send('Nuevo post')
}
export const updatePost = (req,res)=> res.send('Modificar post')
export const removePost = (req,res)=> res.send('Eliminar post')
export const getPost = (req,res)=> res.send('Mostrar post')






