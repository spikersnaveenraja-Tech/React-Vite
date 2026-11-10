import { useState } from "react"

export default function SimpleLoop(){

    const [fruits,setFruits]= useState(['apple','banana','mango','orange'])

    return (
        <>
         <div className="container">
            <div className="h2 text-primary text-center">Fruits List</div>
            <div>
                {
                    fruits.map(
                        (values,ind) => {
                           return <p key = {ind}>{values}</p>
                        }
                    )
                }
            </div>
         </div>
        </>
    )
}