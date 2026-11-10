import { useState } from "react"

export default function DeleteAction(){

    const [fruits,setFruits]= useState(['apple','banana','mango','orange'])
    const[newFruit,setNewFruit] = useState(null)
    const[error,setError] = useState(null)

    const handleChange = (eve)=>{
         debugger;
         if(eve.target.value != null)
           setNewFruit(eve.target.value)
    }

    const addFruit = () => {
        debugger;
        console.log('newFruit',newFruit)

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

    const handleDelete = (ind) => {
        const newFruits =  fruits.filter(
            (value,index) => {
                return  index != ind
            }
        )

        setFruits(newFruits)
    }

    return (
        <>
         <div className="container">
           
            <div className="h2 text-primary text-center">Fruits List</div>
             {
                error ? <div className="alert alert-danger">{error}</div> : <div></div>
            }

            <table className="table">
                <thead>
                    <tr>
                     <th>S.No</th>
                     <th>Fruits</th>
                     <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fruits && fruits.length != 0 ?
                        (
                          fruits.map(
                          (values,ind) => {
                           return <tr key = {ind}>
                                <td>{ind+1}</td>
                                <td>{values}</td>
                                 <td>
                                    <button className="btn btn-success" onClick={()=>handleUpdate(ind)}>Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>handleDelete(ind)}>Delete</button>
                                </td>
                            </tr>

                         }
                         )
                        ) :
                        (<tr>
                            <td colSpan={3}>No records Found</td>
                        </tr>)
                        
                    }
                </tbody>
            </table>

            <div className="mt-3">
                <label htmlFor='' className="form-label">Add New Fruit :</label>
                <input className='ms-1' type = 'text' name= 'newFruit' onChange={handleChange}/>
                <button className="btn btn-info ms-2" onClick={addFruit}>Add New Fruit</button>
            </div>
         </div>
        </>
    )
}