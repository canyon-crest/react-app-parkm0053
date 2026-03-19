import './RandomDog.css'
import React, { useState, useEffect } from 'react';

function RandomDog() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  // Function to fetch the dog
  const fetchDog = async () => {
    setLoading(true);
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setDogImage(data.message);
    setLoading(false);
  };

  // Fetch dog on component mount
  useEffect(() => {
    fetchDog();
  }, []);

  return (
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
  );
}

export default RandomDog;
