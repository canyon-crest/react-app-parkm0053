import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Title from './Title.jsx'
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Title title="Buy Fruit"></Title>
    <Card name="Apples" desc="Jonny liked them"/>
    <Card name="Bananas" desc="Edible and portable telephones"/>
    <Card name="Pears" desc="You've got to buy them in pairs"/>
    <Footer />
  </StrictMode>
)
