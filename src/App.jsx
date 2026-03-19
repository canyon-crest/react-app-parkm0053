import { useState } from 'react'
import './App.css'
import Nav from './Nav.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import Contact from './Contact.jsx'
import Card from './Card.jsx'
import Title from './Title.jsx'
import Guestlog from './Guestlog.jsx'
import RandomDog from './RandomDog.jsx'
import RandomCat from './RandomCat.jsx'

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Nav setPage={setPage}/>
      {page === "home" &&  
        <div>
          <Title title = "Buy Fruit"/>
          <Card name="Apples" desc="Jonny really liked them"/> 
          <Card name="Bananas" desc="Edible and portable telephones" /> 
          <Card name="Pears" desc="You've got to buy them in two"/> 
        </div>
      }
      
      {page === "about" && 
        <div>
          <Title title="About"/>
          <About setPage={setPage} />
        </div> 
      }

      {page === "contact" &&
        <div>
          <Title title="Contact Buy Fruit" />
          <Contact />
          <RandomDog />
          <RandomCat />
        </div>
      }

      
      {page === "guestlog" &&
        <div>
          <Title title="Guest Log" />
          <Guestlog />
        </div>
      }
      <Footer />
    </>
  )
}

export default App
