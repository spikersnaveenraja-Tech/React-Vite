import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import CardComponent from './components/card.component.jsx'
import CollapseComponent from './components/Collapse.component.jsx'
import SpinnerComponent from './components/Spinner.component.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpinnerComponent />
  </StrictMode>,
)
