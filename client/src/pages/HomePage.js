import { usePosts } from "../context/postContext"
import {VscEmptyWindow} from "react-icons/vsc"
import { Link } from "react-router-dom"
import { PostCard } from "../components/PostCard"

export function HomePage(){

    // console.log()
    const {posts} = usePosts()

    if (posts.length === 0) return (
        <div className="flex flex-col justify-center items-center">
            <VscEmptyWindow className="w-48 h-48 text-white"/>
            <h1 className="text-white text-2xl">No hay publicaciones</h1>
        </div>
    )

    return (
        <div className="text-white">

            <Link to={'/new'}>Create New Post</Link>
            <br/>
            <div className="grid grid-cols-3 gap-2">
                {posts.map(post => (
                    <PostCard post={post} key={post._id} />
                ))} 
            </div>

        </div>
 
    )
}

