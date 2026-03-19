import React, { useState } from "react";
import './RandomDog.css'

export default function RandomCat() {
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


  return (
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
  );
}