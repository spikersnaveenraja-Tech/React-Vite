import { useState,useEffect,useLayoutEffect } from "react"

export default function UnMountPhase(){


    const [price,setPrice] = useState(100)
    const [tax,setTax] = useState(3)
    
   useEffect(() => {
    console.log("Effect Run:", price);

    return () => {
      console.log("Cleanup:", price);
    };
  }, [price]);  

    return(
        <>
         { console.log(`render Phase`)}
            <div className = "container">
                <div className="h3 text-center text-danger text-uppercase">unmount phase</div>
               <div className="mt-3">
                    <span className = "h5 text-primary text-uppercase">product price : </span>
                    <span> {price} </span>
               </div>
               <div className="mt-3">
                    <span className = "h5 text-primary text-uppercase">tax : </span>
                    <span> {tax} </span>
               </div>
               <div>
                    <button onClick ={()=> setPrice(price + 50) }> Increase Price </button>
               </div>
            </div>
    
        </>
    )
}