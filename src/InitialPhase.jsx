import { useEffect, useState } from "react"

export default function InitialPhase(){

    const [count,setCount] = useState(0)
//ComponentDidMount
    useEffect(()=>{
        console.log(`Initial Phase`)
       setTimeout(()=>{
            setCount(count+1)
       },2000) 
    },[])

    return (
        <>
        { console.log(`render Phase`)}
          <div className="container">
            <div className="h5 text-center text-primary">Initial Phase</div>
            <span className="h5 text-primary text-uppercase">Count :</span>
            <span> {count} </span>
          </div>
        </>
    )
}