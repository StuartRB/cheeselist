import React from "react";

const CheeseList = () => {
  const cheeses = ["cheddar", "brie", "manchego"]

  return (
      <ul>
        {cheeses.map((cheese, index) => (
          <li key={index}>{cheese}</li>
        ))}
      </ul>
    );
};

export default CheeseList;
