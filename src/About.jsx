import React, { useState, useEffect } from 'react';

function About() {

    const [countryName, setCountryName] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchCountries = async () => {
    setLoading(true);

    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
        const data = await response.json();

        // Pick a random country
        const randomCountry = data[Math.floor(Math.random() * data.length)];

        // Use the "common" name
        setCountryName(randomCountry.name.common);
    } 

    catch (error) {
      console.error('Error fetching countries:', error);
      setCountryName('Error loading country');
    }

    setLoading(false);
  };

  //run fetchCountries once on load
  useEffect(() => {fetchCountries();}, []); 

    return (
        <div>
            <p>This is a fake website were you can shop for fruit. And portions of any sizes of fruit. We are the best fictional seller of fruit on the internet.</p>
            <p>We are located in Mashville, Tennessee, proud sister city of Nashville, Tennessee. Despite Nashville, Tennessee being located in America, Mashville, Tennessee is located in {countryName}.</p>
            <p>Buy Fruit was created because we could not find online websites to buy partial pieces of fruit; we created this website to fill in the niche.</p>
            <button onClick={fetchCountries}>Change what country Mashville is in</button>
        </div>
    )
}

export default About