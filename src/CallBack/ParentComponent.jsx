import { useState } from "react"
import ChildComponent from './ChildComponent.jsx'

export default function ParentComponent (){
 
     const[count,SetCount] = useState(0)

     const AddCount = (inp) => SetCount(count+inp)

     const SubCount= (inp) =>  SetCount(count-inp)

     const MulCount= (inp) =>  SetCount(count*inp)

    return (
        <>
           <div className="h2 text-primary">Parent Component</div>
            <ChildComponent
              count = {count}
              Add = {AddCount}
              Sub = {SubCount}
              Mul = {MulCount}
            />
        </>
    )
}