import { Formik,Form,Field } from "formik"
import BasicForm from "./BasicForm"

export default function BasicFormMainPage(){

    return(
        <>
          <Formik
           initialValues={
            {
              candidateName : "",
              candidateAge:"",
              candidateEmail:"",
              canididatePassword:"",
            }
           }
           onSubmit={(values)=>{
                     console.log("values",values)
           }}
          >
          
           <BasicForm/>
          </Formik>
        </>
    )
}