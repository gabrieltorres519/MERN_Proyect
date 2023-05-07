import { useState, useContext, createContext, useEffect } from "react"
import { getPostsRequests, createPostsRequest, deletePostRequest, getPostRequest, updatePostRequest } from "../api/posts"

const postContext = createContext()

export const usePosts = () => {
    const context = useContext(postContext)
    return context
}  

export const PostProvider = ({children}) => {
    
    console.log('container console')

    const [posts, setPosts] = useState(['Hola...'])
    const getPosts = async ()=>{
        const res = await getPostsRequests()
        console.log(res)
        setPosts(res.data)
    }

    const createPosts = async (post) => {
        // console.log({postContext: post})
        const res = await createPostsRequest(post)
        setPosts([...posts, res.data])
        console.log(res.data)
    }

    const deletePost = async (id) => {
        const res = await deletePostRequest(id)
        if (res.status === 204){
            setPosts(posts.filter((post)=>post._id !== id))
        }
    } 

    const getPost = async (id) => {
        const res = await getPostRequest(id)
        console.log(res)
        return res.data
    }

    const updatePost = async (id, post) =>  {
        const res = await updatePostRequest(id,post)
        setPosts(posts.map(post => post._id === id ? res.data : post))
    } 

    useEffect(() => {
        getPosts()
    },[])

    console.log(posts)

    return <postContext.Provider value={{
        posts,
        getPosts,
        createPosts, 
        deletePost,
        getPost,
        updatePost
    }}>
        {children}
    </postContext.Provider>
}

