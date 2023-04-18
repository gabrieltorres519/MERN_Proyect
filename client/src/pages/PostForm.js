import {Formik, Form, Field} from 'formik'

export function PostForm(){
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
            >
                <Form>
                    <Field name='title' placeholder="title"/>
                    <Field name='description' placeholder="title"/>
                </Form>
            </Formik>
        </div>
    )
}

