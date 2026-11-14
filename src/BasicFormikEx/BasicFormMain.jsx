import { Formik,Field,Form } from "formik"
import BasicForm from "./BasicForm"


export default function BasicFormMain(){


    return(
        <>
         <div className="container">
             <div className="h2 text-center text-primary">BASIC FORM</div>
             <div>
                 <Formik
                   initialValues = { {
                     candidateName : "Karthi",
                     candidateAge : "25",
                     candidateEmail : "abc@g.com",
                     candidatePassword : "12345"
                   } }
                   
                   onSubmit = {(values)=> console.log("Entered values",values)}
                 >
                  <BasicForm/>
                 </Formik>
             </div>
         </div>
        </>
    )
}