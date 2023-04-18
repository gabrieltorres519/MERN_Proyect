import { useState, useContext, createContext, useEffect } from "react"
import { getPostsRequests } from "../api/posts"

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

    useEffect(() => {
        getPosts()
    },[])

    console.log(posts)

    return <postContext.Provider value={{
        posts,
        getPosts
    }}>
        {children}
    </postContext.Provider>
}

