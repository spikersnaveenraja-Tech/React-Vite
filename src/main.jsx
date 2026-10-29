import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {useState} from 'react'

import C_unmountiongPhase from './C_unmountiongPhase.jsx'

function App(){
  const [show,setShow] = useState(true)

   return(
      <div>
       {(show) &&
         (<C_unmountiongPhase/>)}
       
        
        <button onClick = { () => setShow(false)}>Hide</button>
      </div>
   )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
