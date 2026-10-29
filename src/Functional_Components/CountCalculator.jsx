import { useState } from "react"

export default function CountCalculator(){

    const [count,setCount] = useState(0)

    return(
        <>
          <div className = "container">
           
           <div className="h1 text-center text-primary text-uppercase ">Calculator</div>
          <div className="mt-2">
             <span className = "h2 text-secondary">Current count is:</span>
             <span className = "text-danger ms-2 fw-bold fst-italic">{count}</span>
          </div>
          <div className="mt-3">
              <button onClick = { () => setCount( count+1 ) } >ADD</button>
              <button className = "ms-1" onClick = { () => setCount( count-1 ) }>SUB</button>
          </div>

          </div>
        </>
    )
}