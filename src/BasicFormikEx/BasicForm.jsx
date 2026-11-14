import { Formik,Field, Form } from "formik"


export default function BasicForm(){

    return(
        <>
         <div className="container">
            <Form>
                <div className="row">
                    <label htmlFor="" className="form-label">Candidate Name</label>
                    <Field type="text" name="candidateName" className="form-control"/>
                </div>
                <div className="row">
                    <label htmlFor="" className="form-label">Candidate Age</label>
                    <Field type="text" name="candidateAge" className="form-control"/>
                </div>
                <div className="row">
                    <label htmlFor="" className="form-label">Candidate Email</label>
                    <Field type="email" name="candidateEmail" className="form-control"/>
                </div>
                <div className="row">
                    <label htmlFor="" className="form-label">Candidate Password</label>
                    <Field type="password" name="candidatePassword" className="form-control"/>
                </div>
                <div className="mt-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </Form>

         </div>
        </>
    )
}