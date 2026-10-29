import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import CountCalculator from './Functional_Components/CountCalculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountCalculator />
  </StrictMode>,
)
