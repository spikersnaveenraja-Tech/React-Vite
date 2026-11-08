import { useState } from "react"


export default function SimpleTernary(){

    const [product,setProduct] = useState(
        {
          productName : "Apple",
          productPrice: 100,
          productAvail: true
        }
    )

    return(
        <>
           { (product.productAvail && product.productAvail == true) && (
              <div className="card" style = {{width:"200px"}}>
                 <div className="card-image">
                    <div className="card-body">
                        <div className="card-title h5">{product.productName}</div>
                        <div className="card-text">{product.productPrice}</div>
                    </div>
                 </div>
              </div>

           )}
        </>
    )

}