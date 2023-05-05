import React from 'react'
import toast from 'react-hot-toast'

export function PostCard({post}){

    const handleDelete = () =>{
        toast((t)=> (
            <div>
                <p>Estás seguro de eliminar la nota?</p>
                <div>
                    <button>Delete</button>
                    <button className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2' 
                        onClick={()=> toast.dismiss(t.id)}
                    >Cancel</button>
                </div>
            </div>
        ))
    }

    return (
        <div className='bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer'>
            <div className='px-4 py-7'>
                <div className='flex justify-between '>
                    <h3>
                        {post.title}
                    </h3>
                    <button className='bg-red-600 text-sm px-2 py-1 rounded-sm'
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
                <p>
                    {post.description}
                </p>
            </div>
        </div>
    )
}
