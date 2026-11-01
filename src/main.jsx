import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import GenderSelect from './GenderSelect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GenderSelect />
  </StrictMode>,
)
