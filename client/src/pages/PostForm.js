import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { usePosts } from '../context/postContext'
import {useNavigate} from 'react-router-dom'

export function PostForm(){

    const {createPosts} = usePosts()
    const navigate = useNavigate()
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required("Se require un titulo"),
                    description: Yup.string().required("Se require una descripción")
                })}
                onSubmit={async(values,actions)=>{
                    await createPosts(values)
                    navigate('/')
                }}
            >
            
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <Field name='title' placeholder="title"
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
                    />
                    <ErrorMessage component="p" className='text-red-400 text-sm' name='title'/>
                    <Field name='description' placeholder="description"
                        className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full'
                    />
                    <ErrorMessage component="p" className='text-red-400 text-sm' name='description'/>

                    <button type='submit'>Save</button>
                </Form>
            )}

            </Formik>
        </div>
    )
}

