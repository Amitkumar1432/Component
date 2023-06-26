import React, { useState } from "react";

const B = ({ initialCendol }) => {
  const [cendol, setCendol] = useState(initialCendol);
  const handleClick = () => {
    setCendol(cendol + 10);
  };

  return (
    <div>
      <h1>Component B</h1>
      <p>Value of cendol received from Component A: {cendol}</p>
      <button onClick={handleClick}>Increment by 10</button>
    </div>
  );
};

export default B;
