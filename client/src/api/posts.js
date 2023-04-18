import axios from 'axios'

export const getPostsRequests = async ()=> await axios.get('/posts')

export const createPostsRequest = async (post) => await axios.post('/posts', post)