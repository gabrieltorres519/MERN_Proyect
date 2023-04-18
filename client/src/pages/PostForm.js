import {Formik, Form, Field} from 'formik'

export function PostForm(){
    return (
        <div>
            <Formik>
                <Form>
                    <Field placeholder="title"/>
                    <Field placeholder="title"/>
                </Form>
            </Formik>
        </div>
    )
}

