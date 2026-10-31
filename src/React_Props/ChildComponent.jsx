


export default function ChildComponent({
    // name = {name},
    // age = {age}
    name,
    age,
    salary:{gross:{takeHand}={}}
}) {


    return (
        <>
            <div className="h1 text-primary ">Child Component</div>
            <div>
                <span className="fs-3">Employee Name:</span>
                <span className="ms-1">{name}</span>
            </div>
            <div>
                <span className="fs-3">Employee Age:</span>
                <span className="ms-1">{age}</span>
            </div>
            <div>
                <span className="fs-3">Employee Take home Salary : </span>
                <span> {takeHand} </span>
            </div>
        </>
    )
}