import {Formik, Form, Field} from 'formik'
import { usePosts } from '../context/postContext'

export function PostForm(){

    const {createPosts} = usePosts()
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
                onSubmit={(values,actions)=>{
                    createPosts(values)
                }}
            >
            
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <Field name='title' placeholder="title"/>
                    <Field name='description' placeholder="description"/>
                    <button type='submit'>Save</button>
                </Form>
            )}

            </Formik>
        </div>
    )
}

