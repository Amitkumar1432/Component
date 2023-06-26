import React, { useState } from "react";
import B from "./B";

const A = () => {
  const cendol = 2;
  const [value, setValue] = useState(2);

  return (
    <div>
      <h1>Component A</h1>
      <p>Value of cendol in Component A: {value}</p>
      <B initialCendol={value} />
    </div>
  );
};

export default A;
