import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' // Added Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Added Bootstrap JS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/javascript">
      <App />
    </BrowserRouter>    
  </StrictMode>,
)
