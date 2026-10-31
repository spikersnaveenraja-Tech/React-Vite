import { useState } from "react"

export default function ChildComponent({
    count,
    Add,
    Sub,
    Mul
}){

    const[addInput,SetAddInput] = useState(1)
    const[subInput,SetSubInput] = useState(1)
    const[mulInput,SetMulInput] = useState(2)    
    return(
        <>
         <div className="h2 text-primary">Child Component</div>
         <span className="h5 text-info">Count :</span>
         <span className="ms-1">{count}</span>
         <div>
         <button className="btn btn-success mt-3" onClick={()=>Add(addInput)}>Add+{addInput}    </button>
         <button className="btn btn-danger mt-3 ms-1" onClick={()=>Sub(subInput)}>Sub+{subInput}</button>
          <button className="btn btn-info mt-3 ms-1" onClick={()=>Mul(mulInput)}>Mul*{mulInput}</button>
         </div>
        </>
    )
}