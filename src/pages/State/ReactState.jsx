import {useState} from 'react'

export default function ReactState(){
   
     const [name,setName] = useState("Naveen")
     const [age,setAge] = useState("35")

    return (
        <>
         <div class = "container">
             <div>
              <div className = "h1 text-center text-info">CANDIDATE INFORMATION</div> 
             </div>
             <div>
                <span className="h5 text-primary">CANDIDATE NAME : </span>
                <span>{name}</span>
             </div>
             <div>
                <span className="h5 text-primary">CANDIDATE AGE :</span>
                <span className="fst-italic fs-1"> {age}</span>
             </div>
        
         </div>
        </>
    )
}