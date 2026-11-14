import { useState } from "react"

export default function LoopWithAction(){

    const [fruits,setFruits]= useState(['apple','banana','mango','orange'])
    const[newFruit,setNewFruit] = useState(null)
    const[error,setError] = useState(null)

    const handleChange = (eve)=>{
         if(eve.target.value != null)
           setNewFruit(eve.target.value)
    }

    const addFruit = () => {

        if(newFruit === null ||  newFruit.trim().length === 0){
            setError("Please enter the fruit ")
        }
       else{
       const isAvailable = fruits.find(val => val === newFruit)

        if(isAvailable === undefined){
            setError(null)
            setFruits(
            [...fruits,newFruit]
         )
        }
        else{
          setError("This Fruit is already Available the list ")
        }
        }
    }

    return (
        <>
         <div className="container">
           
            <div className="h2 text-primary text-center">Fruits List</div>
             {
                error ? <div className="alert alert-danger">{error}</div> : <div></div>
            }
            <div>
                {
                    fruits.map(
                        (values,ind) => {
                           return <p key = {ind}>{values}</p>
                        }
                    )
                }
            </div>
            <div className="mt-3">
                <label htmlFor='' className="form-label">Add New Fruit :</label>
                <input className='ms-1' type = 'text' name= 'newFruit' onChange={handleChange}/>
                <button className="btn btn-info ms-2" onClick={addFruit}>Add New Fruit</button>
            </div>
         </div>
        </>
    )
}