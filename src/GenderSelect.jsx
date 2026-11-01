import { useState } from "react"
export default function GenderSelect(){

    const [gender,setGender] = useState(null)

    return(
        <>
         <div className="container mt-2 bg-warning">
            <div className="h2 text-center text-primary"> Gender Selection Application</div>

            <div className="mt-3">
                <label htmlFor="male" className="form-label">Gender</label>

                <div className="form-check-inline">
                    <input type="radio" className="form-check-input ms-3" name="gender" value="male" id="male"
                    onChange={(e)=>{setGender(e.target.value)}}/>
                    <label htmlFor="male" className="form-check-label ms-1">Male</label>
                </div>
                
            <div className="form-check-inline">
                <input type="radio" className="form-check-input ms-3" name="gender" value="female" id="female"
                onChange={(e)=>{setGender(e.target.value)}}/>
                   <label htmlFor="male" className="form-check-label ms-1">Female</label>
            </div>

            <div className="form-check-inline">
                <input type="radio" className="form-check-input ms-3" name="gender" value="TransGender" id="trans"
                onChange={(e)=>{setGender(e.target.value)}}/>
                   <label htmlFor="male" className="form-check-label ms-1">TransGender</label>
            </div>
            </div>

            <div className="mt-5">
                    <span className="h6  ">You are </span>
                    <span className="text-primary text-uppercase">{gender}</span>
            </div>
          
        </div>
        </>
    )
}