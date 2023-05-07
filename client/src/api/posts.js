import axios from 'axios'

export const getPostsRequests = async ()=> await axios.get('/posts')

export const createPostsRequest = async (post) => await axios.post('/posts', post)

export const deletePostRequest = async id => await axios.delete('/posts/'+id)

export const getPostRequest = async id => await axios.get('/posts/' + id)

export const updatePostRequest = async (id,newFields) => await axios.put(`/posts/${id}`, newFields)