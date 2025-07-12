import React, { useEffect, useState } from "react";
import "./App.css";

function Azkar() {
  const [azkar, setAzkar] = useState([]);

  useEffect(() => {
    async function fetchAzkar() {
      const res = await fetch("http://localhost:3001/cards");
      const data = await res.json();

      const updated = data.map((card) => ({
        ...card,
        remaining: card.count,
        initialRemaining: card.count,
      }));

      setAzkar(updated);
    }

    fetchAzkar();
  }, []);

  const handleClick = (index) => {
    setAzkar((prevAzkar) =>
      prevAzkar.map((card, i) =>
        i === index && card.remaining > 0
          ? { ...card, remaining: card.remaining - 1 }
          : card
      )
    );
  };

  const handleReset = (e, index) => {
    e.stopPropagation(); // prevent triggering decrement
    setAzkar((prevAzkar) =>
      prevAzkar.map((card, i) =>
        i === index ? { ...card, remaining: card.initialRemaining } : card
      )
    );
  };

  return (
    <div className="azkar-cards">
      {azkar.map((card, index) => (
        <div
          key={card.id}
          className="card"
          onClick={() => handleClick(index)}
          style={{ backgroundColor: card.backgroundColor, cursor: "pointer" }}
        >
          <p className="zekr">{card.title}</p>
          <div className="icon" onClick={(e) => handleReset(e, index)}>
            🔄
          </div>
          <h2>{card.remaining}</h2>
          <p>{card.remaining}</p>
        </div>
      ))}
    </div>
  );
}

export default Azkar;
