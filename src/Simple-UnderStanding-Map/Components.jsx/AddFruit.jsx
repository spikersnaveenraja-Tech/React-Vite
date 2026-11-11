import { useState } from "react"


export default function AddFruit({
    fruits,
    setFruits,
    setError
}) {
    
    const [newFruit, setNewFruit] = useState(null)
    

    const handleChange = (eve) => {

        if (eve.target.value != null)
            setNewFruit(eve.target.value)
    }

    const addFruit = () => {
        if (newFruit === null || newFruit.trim().length === 0) {
            setError("Please enter the fruit ")
        }

        else {
            const isAvailable = fruits.find(val => val === newFruit)

            if (isAvailable === undefined) {
                setError(null)
                setFruits(
                    [...fruits, newFruit]
                )
                document.getElementById('inp-txt').value = ''
                setNewFruit(null)
            }
            else {
                setError("This Fruit is already Available the list ")
            }
        }
    }
    return (
        <>
            <div className="mt-3">
                <label htmlFor='' className="form-label">Add New Fruit :</label>
                <input className='ms-1' type='text' id="inp-txt" name='newFruit' onChange={handleChange} />
                <button className="btn btn-info ms-2" onClick={addFruit}>Add New Fruit</button>
            </div>
        </>
    )
}


