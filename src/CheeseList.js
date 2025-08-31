import React from "react";
import { useEffect, useState } from "react";

const CheeseList = () => {

  const cheeses = ["cheddar", "brie", "manchego", "comte", "stilton", "blue"]

    const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/get")   // replace with your API endpoint
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching:", err));
  }, []); // empty array = run once when component mounts

  return (<>
          <ul>
            {cheeses.map((cheese, index) => (
              <li key={index}>{cheese}</li>
            ))}
          </ul>

          <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    );
};

export default CheeseList;
