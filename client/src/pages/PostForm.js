import {Formik, Form, Field} from 'formik'

export function PostForm(){
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
                onSubmit={(values,actions)=>{
                    console.log(values)
                }}
            >
            
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit}>
                    <Field name='title' placeholder="title"/>
                    <Field name='description' placeholder="description"/>
                    <button>Save</button>
                </Form>
            )}

            </Formik>
        </div>
    )
}

