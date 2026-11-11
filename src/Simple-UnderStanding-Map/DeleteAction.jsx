import { useState } from "react"
import ListItem from "./Components.jsx/Listitem"
import AddFruit from "./Components.jsx/AddFruit"


export default function DeleteAction() {

    const [fruits, setFruits] = useState(['apple', 'banana', 'mango', 'orange'])
    const [error, setError] = useState(null)




    return (
        <>
            <div className="container">

                <div className="h2 text-primary text-center">Fruits List</div>
                {
                    error ? <div className="alert alert-danger">{error}</div> : <div></div>
                }

                <ListItem
                    fruits={fruits}
                    setFruits={setFruits}
                    setError={setError}

                />

                <AddFruit
                    fruits={fruits}
                    setFruits={setFruits}
                    setError={setError}
                />

            </div>
        </>
    )
}