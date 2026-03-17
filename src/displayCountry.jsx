import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomCountryDisplay = () => {
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState(null);
  const [error, setError] = useState(null);

  // Function to select a random country from the list
  const selectRandomCountry = () => {
    if (countries.length > 0) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      setRandomCountry(countries[randomIndex]);
    }
  };

  // Fetch all countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Fetch only necessary fields for performance
        const response = await axios.get('https://restcountries.com');
        setCountries(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <h1>Random Country Generator</h1>
      <button onClick={selectRandomCountry}>
        Generate Random Country
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {randomCountry ? (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
          <h2>{randomCountry.name.common}</h2>
          <img src={randomCountry.flags.png} alt={`Flag of ${randomCountry.name.common}`} width="100" />
          <p><strong>Capital:</strong> {randomCountry.capital?.[0]}</p>
          <p><strong>Region:</strong> {randomCountry.region}</p>
          <p><strong>Population:</strong> {randomCountry.population.toLocaleString()}</p>
        </div>
      ) : (
        <p>Click the button to load a random country.</p>
      )}
    </div>
  );
};

export default RandomCountryDisplay;