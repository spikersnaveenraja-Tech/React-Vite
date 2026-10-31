
export default function ChildComponent({
    count,
    Add,
    Sub
}){

    
    return(
        <>
         <div className="h2 text-primary">Child Component</div>
         <span ClassName="h5 text-info">Count :</span>
         <span className="ms-1">{count}</span>
         <div>
         <button className="btn btn-success mt-3" onClick={Add}>Add</button>
         <button className="btn btn-danger mt-3 ms-1" onClick={Sub}>Sub</button>
         </div>
        </>
    )
}