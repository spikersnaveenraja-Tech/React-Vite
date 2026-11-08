import { useState } from "react"
import {Apicall} from './Service/Apicall'

export default function SimpleForm() {

    const [formData, setFormData] = useState({})

    const handleData = (eve) => {

        const fieldName = eve.target.name;
        const fieldValue = eve.target.value;

        setFormData({ ...formData, [fieldName]: fieldValue })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payLoad = {

            "id": 0,
            "username": formData['CandidateName'],
            "email": formData['CandidateEmail'],
            "password": formData['CandidateName']
        }
      const response =  await Apicall(payLoad)
      console.log(response)
   
    }

    return (
        <>
            <div className="container mt-3">
                <div className="h3 text-center-text-primary">Register Form</div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-3">
                        <label className="for-label">Enter your Name</label>
                        <input type="text" name="CandidateName" className="form-control" onChange={handleData} />
                    </div>
                    <div className="mt-3">
                        <label className="for-label">Enter your Email</label>
                        <input type="text" name="CandidateEmail" className="form-control" onChange={handleData} />
                    </div>
                    <div className="mt-3">
                        <label className="for-label">Enter your Phone</label>
                        <input type="text" name="CandidatePhone" className="form-control" onChange={handleData} />
                    </div>
                    <div>
                        <input className="btn btn-info" type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </>
    )
}