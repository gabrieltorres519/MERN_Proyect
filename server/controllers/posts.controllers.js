import Post from "../models/Posts.js"
import { uploadImage, deleteImage } from "../libs/cloudinary.js"
import fs from 'fs-extra'


//Función que regresa todos los datos de Posts
export const getPosts = async (req,res)=> {
    try {
        // throw new Error('Nuevo mensaje de error')
        const posts = await Post.find() 
        res.send(posts)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }

}

 
// Función parainsertar un dato
export const createPost = async (req,res)=> {
    try {
        const {title, description} = req.body
        let image;
        if(req.files.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            // console.log(res)
            await fs.remove(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }
        // console.log(req.body)
        const newPost = new Post({title,description,image})
        await newPost.save()
        // console.log(newPost)
        return res.json(newPost)
        
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }

}


// Función modificar dato
export const updatePost = async (req,res)=> {
    try {
        // console.log(req.params)
        // console.log(req.body)
        // const post = await Post.findByIdAndUpdate(req.params.id,req.body)
        const updatedPost = await Post.updateOne({_id: req.params.id},req.body,{new:true})

        console.log(updatedPost)
        return res.send('Post Modificado')
            
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }

}

// Función para eliminar datos
export const removePost = async (req,res)=> {
    try {

        const postRemoved = await Post.findByIdAndDelete({_id: req.params.id})
    
        if (!postRemoved) return res.sendStatus(404)

        if(postRemoved.image.public_id){
            await deleteImage(postRemoved.image.public_id)
        }

        return res.sendStatus(204)

        
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }

}


export const getPost = async (req,res)=> {
    try {
        const post = await Post.findById({_id: req.params.id})
        if (!post) return res.sendStatus(404)
        return res.json(post)
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: error.message})
    }

}






