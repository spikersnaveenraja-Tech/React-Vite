import { useState } from "react";


export default function ListItem({
    fruits,
    setFruits,
    setError
}) {

    const [showForm, setShowForm] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [newUpdatedFruit, setNewUpdatedFruit] = useState('');

    const handleDelete = (ind) => {
        const newFruits = fruits.filter(
            (value, index) => {
                return index != ind
            }
        )

        setFruits(newFruits)
    }

    const handleUpdate = (index) => {
        setError(null)
        setEditIndex(index);
        setNewUpdatedFruit(fruits[index]);
        setShowForm(true);
    }

    const updateFruit = () => {

        const updatedFruits = [...fruits];
        updatedFruits[editIndex] = newUpdatedFruit;

        setFruits(updatedFruits);

        setShowForm(false);
        setEditIndex(null);
        setNewUpdatedFruit('');
        setError(null)
    };

    return (

        <>
            {
                showForm ?
                    (
                        <div className="card p-3 mt-3">
                            <h4>Update Fruit</h4>

                            <input
                                type="text"
                                className="form-control"
                                value={newUpdatedFruit}
                                onChange={(e) => setNewUpdatedFruit(e.target.value)}
                            />

                            <button
                                className="btn btn-success mt-2"
                                onClick={updateFruit}
                            >
                                Save
                            </button>

                            <button
                                className="btn btn-secondary mt-2 ms-2"
                                onClick={() => setShowForm(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    )
                    :
                    (
                        <div>
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
                                        fruits && fruits.length !== 0 ?
                                            (
                                                fruits.map(
                                                    (values, ind) => {
                                                        return (
                                                            <tr key={ind}>
                                                                <td>{ind + 1}</td>
                                                                <td>{values}</td>
                                                                <td>
                                                                    <button className="btn btn-success" onClick={() => handleUpdate(ind)}>Update</button>
                                                                </td>
                                                                <td>
                                                                    <button className="btn btn-danger" onClick={() => handleDelete(ind)}>Delete</button>
                                                                </td>
                                                            </tr>)

                                                    }
                                                )
                                            ) :
                                            (
                                                <tr>
                                                    <td colSpan={4}>No records Found</td>
                                                </tr>
                                            )

                                    }
                                </tbody>
                            </table>
                        </div>
                    )
            }

        </>
    )
}