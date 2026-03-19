import './RandomDog.css'
import React, { useState, useEffect } from 'react';

function Contact() {
    const [catUrl, setCatUrl] = useState("");
      const [loading, setLoading] = useState(false);
    
      const fetchCat = async () => {
        try {
          setLoading(true);
          const response = await fetch("https://api.thecatapi.com/v1/images/search");
          const data = await response.json();
          setCatUrl(data[0].url);
        } catch (error) {
          console.error("Error fetching cat:", error);
        } finally {
          setLoading(false);
        }
      };

      const [dogImage, setDogImage] = useState('');
        const [dogLoading, setDogLoading] = useState(true);
      
        // Function to fetch the dog
        const fetchDog = async () => {
          setDogLoading(true);
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          const data = await response.json();
          setDogImage(data.message);
          setDogLoading(false);
        };
      
        // Fetch dog on component mount
        useEffect(() => {
          fetchDog();
        }, []);


    return (
        <div>
            <p>Contact me at buyfruit@gmail.com.</p>
            <p>Please note that no one will respond to your email, so please do not have any expectations.</p>
            <p>Because it distresses me greatly that you will not be able to contact me, and perhaps you as well, for comfort, click the buttons below for a dog or a cat.</p>

            <div id="randomDogDiv">
      <h2>Random Dog</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="Random Dog" id="dogPhoto"/>
      )}
      <br />
      <button onClick={fetchDog}>Show New Dog</button>
    </div>

    <div id="randomDogDiv">
      <h2>Random Cat</h2>
      
      <div>
        {catUrl && (
          <img
            src={catUrl}
            alt="Random cat"
            id="dogPhoto"
          />
        )}
      </div>

      <button onClick={fetchCat} disabled={loading}>
        {loading ? "Loading..." : "Show me new cat"}
      </button>
    </div>
        </div>
    )
}

export default Contact