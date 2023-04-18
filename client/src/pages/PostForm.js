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
            
            {(handleSubmit) => (
                <Form onSubmit={handleSubmit}>
                    <Field name='title' placeholder="title"/>
                    <Field name='description' placeholder="title"/>
                    <button>Save</button>
                </Form>
            )}

            </Formik>
        </div>
    )
}

