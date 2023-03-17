import Post from "../models/Posts.js"
//Función que regresa todos los datos de Posts
export const getPosts = async (req,res)=> {
    const posts = await Post.find() 
    res.send(posts)
}
// Función parainsertar un dato
export const createPost = async (req,res)=> {
    const {title, description} = req.body
    console.log(req.body)
    const newPost = new Post({title,description})
    await newPost.save()
    console.log(newPost)
    return res.json(newPost)
}
// Función modificar dato
export const updatePost = async (req,res)=> {
    // console.log(req.params)
    // console.log(req.body)
    // const post = await Post.findByIdAndUpdate(req.params.id,req.body)
    const post = await Post.updateOne({_id: req.params.id},req.body,{new:true})

    console.log(post)
    return res.send('Post Modificado')
}

export const removePost = (req,res)=> {
    
    res.send('Eliminar post')
}
export const getPost = (req,res)=> res.send('Mostrar post')






