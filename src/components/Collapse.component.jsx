import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";


export default function CollapseComponent(){
   
    const [flag,setFlag] = useState(false)

    const handleClick = ()=>{
         setFlag(!flag)
    }

    return(
        <>
        <div className="container">
            <Button
            variant='danger'
            onClick={handleClick}
            >
             { flag ? 'Hide' : 'Show'}
            </Button>
        </div>
    
        <Collapse in={flag}>
           <div className="h3">
            <p>This is the content</p>
           </div>
        </Collapse>
          
        </>
    )

}