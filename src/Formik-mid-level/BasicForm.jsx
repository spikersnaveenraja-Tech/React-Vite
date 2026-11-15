import { Formik,Form,Field } from 'formik'
import formData from '../assets/RegisterForm.json'
import FieldInput from '../components/FieldInput'

export default function BasicForm(){

    return(
        <>
         <div className="conntainer">
            <div className="h2 text-center text-primary">BASIC FORM</div>
            <Form>
                {
                    formData.map((data,index) => {
                        return (
                            <div key={index}>
                                 <FieldInput header={data}
                                 />
                            </div>
                        )
                    })
                }
            </Form>

         </div>
        </>
    )
}