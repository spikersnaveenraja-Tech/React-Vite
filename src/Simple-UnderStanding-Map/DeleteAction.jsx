import { useState } from "react"
import ListItem from "./Components.jsx/Listitem"
import AddFruit from "./Components.jsx/AddFruit"


export default function DeleteAction(){

    const [fruits,setFruits]= useState(['apple','banana','mango','orange'])
    const[newFruit,setNewFruit] = useState(null)
    const[error,setError] = useState(null)

    const handleChange = (eve)=>{
        
         if(eve.target.value != null)
           setNewFruit(eve.target.value)
    }

    const addFruit = () => {
          debugger;
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
         document.getElementById('inp-txt').value=''
         setNewFruit(null)
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

            <ListItem
               fruits ={fruits}
            setFruits={setFruits}
            
            />
           
            <AddFruit 
               handleChange = {handleChange}
               addFruit ={addFruit}
             />

         </div>
        </>
    )
}