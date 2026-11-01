import {useState} from "react";

export default function CounterProgram() {

    const [count, setCount] = useState(0);

    return(
        <>
        <div>
        <div className="h2 text-center text-primary mt-2">Counter Program</div>
        </div>
       <div className="text-center">
         <span className="h4 text-warning mt-2">Count:</span>
        <span className="h4 text-info">{count}</span>
        </div>
        <div className="d-flex justify-content-center gap-2 mt-2">
            <button className="btn btn-success" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
        </>
    )
}