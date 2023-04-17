import { useState, useContext, createContext } from "react"

const context = createContext()

export const PostContainer = ({children}) => {
    
    console.log('container console')

    const [posts, setPosts] = useState(['Hola...'])

    console.log(posts)

    return <context.Provider value={{
        posts,
        setPosts
    }}>
        {children}
    </context.Provider>
}

