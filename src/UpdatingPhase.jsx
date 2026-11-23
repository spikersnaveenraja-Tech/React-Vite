import { useEffect, useState } from "react"


export default function UpdatingPhase(){

    const [price,setPrice] = useState(100)
    const [tax,setTax] = useState(3)

    useEffect(()=>{
        setTimeout(()=>{
            
          console.log("useEffect is called")
        if(price >= 300)
            setTax(3.1)
        if(price >= 500)
            setTax(5.1)
        },2000)
       
    },[price])

    return(
      
        <>
         { console.log(`render Phase`)}
         <div className="container">
            <div className="h3 text-center text-danger">Updating Phase</div>
            <div className="mt-3">
                <span className="h5 text-primary text-uppercase">Price :</span>
                <span>{price}</span>
            </div>
            <div className="mt-3">
                <span className="h5 text-primary text-uppercase">Tax :</span>
                <span>{tax}</span>
            </div>

              <button className="btn btn-dark mt-3" onClick={()=>setPrice(price+50)}>Increase Price</button>
            
         </div>
        </>
    )
}