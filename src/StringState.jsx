
import { useState } from "react";

export default function StringState() {
    const [name, setName] = useState("Naveen");

    return(
        <>
        <div className="h2 text-center text-primary mt-2">String State</div>
        <div className="text-center">
            <span className="h4 text-info">Name:</span>
            <span className="h4 text-warning">{name}</span>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-2">
            <button className="btn btn-primary" onClick={() => setName("Jacob")}>Set Name</button>
        </div>
        </>
    )
}   