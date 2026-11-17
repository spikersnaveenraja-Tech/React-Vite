import { Formik,Form,Field } from "formik"
import BasicForm from "./BasicForm"
import { initialValue,handleSubmit,validationSchema } from "./FieldAction"


export default function BasicFormMainPage(){

    return(
        <>
          <Formik
           initialValues={initialValue }
           validationSchema={validationSchema}
           onSubmit={handleSubmit}
          >
          
           <BasicForm/>
          </Formik>
        </>
    )
}