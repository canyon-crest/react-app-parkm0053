import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Title from './Title.jsx'
import Nav from './Nav.jsx'
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
