import { useState } from "react"
import ChildComponent from './ChildrenComponent.jsx'
export default function ParentComponent (){
 
     const[count,SetCount] = useState(0)

     const AddCount = () => SetCount(count+1)

     function SubCount(){
        SetCount(count-1)
     }

    return (
        <>
           <div className="h2 text-primary">Parent Component</div>
            <ChildComponent
              count = {count}
              Add = {AddCount}
              Sub = {SubCount}
            />
        </>
    )
}