import { useState } from "react"


export default function FruitMainpage(){

    const [fruits,setFruits] = useState(["apple","orange","grapes","pineapple"])
    const [error, setError] = useState(null)
    const [newFruit,setNewFruit] = useState(null)
    const [edit, setEdit] = useState(false)
    const [fruitState, setFruitState] = useState([])
    const [searchText,setSearchText] = useState(null)


     const handleChange = (e) => {
        setNewFruit(e.target.value)
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()

        const isAvailabilty = fruits.find( value => value == newFruit )
        if(isAvailabilty === undefined){
            setError(null)
            setFruits([ ...fruits,newFruit])
        }
        else{
            setError("This Fruit is already Available the list ")
        }
            
    }


    const handleDelete = (fruitIndex) => {
        const newFruiltList = fruits.filter((value, index) => index != fruitIndex)
        setFruits(newFruiltList)

    }

    const handleSave = (fruitIndex) => {
        const newFruitList = fruits.map((value, index) => {
            return index === fruitIndex
                ? fruitState[fruitIndex] ?? value
                : value;
        });

        setFruits(newFruitList);
        setEdit(false);
    };

     const handleSearch = (e) => {
        e.preventDefault()
        if(searchText == null){
            setError("Your search Item empty")
        }
        else{
            setError(null)
            const newFruiltList = fruits.filter((value, index) =>  value.toLowerCase().indexOf(searchText) != -1 )
            setFruits(newFruiltList)
        }    
    }

    return (
        <>
         {!edit ?
          (
             <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>
                   {error && <div className="alert alert-danger">{error}</div>}
                <div className="mt-5">
                    <form onSubmit = {handleSearch}>
                        <div className ="d-flex">
                            <label htmlFor="search" className="h3 form-label"> Search </label>
                            <input 
                                type="text"
                                id = "search"
                                className="form-control ms-3" 
                                onChange={(e) => setSearchText(e.target.value)} />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Fruits</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fruits && fruits.length != 0 ? (
                            fruits.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{value}</td>
                                        <td>
                                            <button onClick={() => setEdit(true)}>Edit</button>
                                            <button onClick={() => handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colspan={3}>No Fruits Found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
          )
           :
          (
              <div className="container mt-3">
                <div className="h1 text-center text-danger"> Fruit List </div>
                 <table className="table">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Fruits</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fruits.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <input
                                            type="text"
                                            value = { fruitState[index] ?? value}
                                            onChange={(e) => {
                                                setFruitState({
                                                    ...fruitState,
                                                    [index]: e.target.value
                                                });
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleSave(index)}>Save</button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
              </div>
          )
        }
           <div className ="container mt-5">
               <div className="h5"> ADD New Fruit</div>
               <form onSubmit = {handleSubmit}>
                  <div className="mt-1">
                    <label htmlFor="" className="form-label">Enter New Fruit</label>
                    <input 
                        type="text" 
                        name="newFruit"
                        className ="ms-2" 
                        onChange ={ handleChange } 
                    />
               </div>
               <div className = "mt-2">
                  <button type="submit"> Add New Fruit </button>  
               </div>  
               </form>
            </div>
       </>
    )
}