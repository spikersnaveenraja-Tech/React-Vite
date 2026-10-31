import { useState } from 'react'
import ChildComponent from './ChildComponent.jsx'

export default function ParentComponent() {
    const [name, setName] = useState("Naveen")
    const [age, setAge] = useState(35)
    const [salary, setSalary] = useState({
        basic: 2000,
        hra: 5000,
        da: 2000,
        gross: {
            takeHand: 7000,
            tax: 2000
        }
    })

    return (
        <>
            <div className="h1 text-primary ">Parent Component</div>
            <ChildComponent
                name={name}
                age={age}
                salary ={salary}
            // {...{name,age}}
            />
        </>
    )
}