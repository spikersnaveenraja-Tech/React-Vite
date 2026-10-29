import { useState } from "react"

export default function FunctionUpdate(){

    const [name,SetName] = useState("Naveen")
    const[age,setAge]= useState(35)

    return(
        <>
          <div>
            <div className="h1 text-primary"> Candidate Information</div>
          </div>
          <div className="mt-5">
            <span className="h5 text-secondary">Candidate Name</span>
            <span className="ms-3">{name}</span>
            <span className="ms-3">
                <button onClick = { () => SetName("Jacob")}>Update Name</button>
            </span>
          </div>
          <div className="mt-5">
            <span className="h5 text-secondary">Candidate Age</span>
            <span className="ms-3">{age}</span>
            <span className="ms-3">
                <button onClick = { () => setAge(36)}>Update Age</button>
            </span>
          </div>
        
        </>
    )
}