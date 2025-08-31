import React from "react";

const CheeseList = () => {
  const cheeses = ["cheddar", "brie", "manchego", "comte"]

  return (
      <ul>
        {cheeses.map((cheese, index) => (
          <li key={index}>{cheese}</li>
        ))}
      </ul>
    );
};

export default CheeseList;
