import { useState } from "react"


export default function AddFruit({
     handleChange,
     addFruit
}) {

    return (
        <>
            <div className="mt-3">
                <label htmlFor='' className="form-label">Add New Fruit :</label>
                <input className='ms-1' type='text' id ="inp-txt" name='newFruit' onChange={handleChange} />
                <button className="btn btn-info ms-2" onClick={addFruit}>Add New Fruit</button>
            </div>
        </>
    )
}


