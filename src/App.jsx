import { useState } from 'react'
import React, { Suspense, lazy } from 'react';
import './App.css'
//import Nav from './Nav.jsx'
const Nav = lazy(() => import('./Nav'));
const About = lazy(() => import('./About'));
const Footer = lazy(() => import('./Footer'));
const Contact = lazy(() => import('./Contact'));
const Card = lazy(() => import('./Card'));
const Guestlog = lazy(() => import('./Guestlog'));


function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Suspense>
      <Nav setPage={setPage}/>
      {page === "home" &&  
        <div>
          <h1 className="title">Buy Fruit</h1>
          <Card name="Apples" desc="Jonny really liked them"/> 
          <Card name="Bananas" desc="Edible and portable telephones" /> 
          <Card name="Pears" desc="You've got to buy them in two"/> 
        </div>
      }
      
      {page === "about" && 
        <div>
          <h1 className="title">About</h1>
          <About setPage={setPage} />
        </div> 
      }

      {page === "contact" &&
        <div>
          <h1 className="title">Contact Buy Fruit</h1>
          <Contact />
        </div>
      }

      
      {page === "guestlog" &&
        <div>
          <h1 className="title">Guest Log</h1>
          <Guestlog />
        </div>
      }
      <Footer />
      </Suspense>
    </>
  )
}

export default App
