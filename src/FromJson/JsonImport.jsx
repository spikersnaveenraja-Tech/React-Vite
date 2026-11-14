import { useState } from "react"
import products from '../assets/product.json'

export default function JsonImport(){
console.log(products)
    return(
        <>
        <div className="container">
            <div className="h2 text-primary">JSON IMPORT</div>
                {
                    products.map(({id,title,price}) => {
                       return <div key={id}>
                            <h3>{price}</h3>
                            <p>{title}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}