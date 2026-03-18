import React, { useState } from "react";

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
    <div>
      <h2>Random Cat</h2>
      
      <button onClick={fetchCat} disabled={loading}>
        {loading ? "Loading..." : "Click for cat"}
      </button>

      <div>
        {catUrl && (
          <img
            src={catUrl}
            alt="Random cat"
          />
        )}
      </div>
    </div>
  );
}