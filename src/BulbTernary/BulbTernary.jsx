import { useState } from "react"
import bulbOn from '../assets/bulp-images/bulp-on.jpg'
import bulbOff from '../assets/bulp-images/bulp-off.jpg'
export default function BulbTernary(){

    const [bulbSwitch,setBulbSwitch] = useState(true)

    return (
        <>
          <div mt-3>
             <div className="title h4 text-center text-primary text-uppercase">Switch Program</div>
             <div>
                { bulbSwitch ? 
                ( <img src={bulbOn} alt="bulb" height={100} width= {100}/>) : 
                ( <img src={bulbOff} alt="bulb" height={100} width= {100}/>) 
               }
             </div>
             <div>
                <button className="btn btn-info" onClick = {()=>setBulbSwitch(!bulbSwitch)}>Switch On / Off</button>
    
             </div>
          </div>
        </>
    )
}