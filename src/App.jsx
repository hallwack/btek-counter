import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber((number) => (number > 9 ? number : number + 1));
  };

  const handleDecrement = () => {
    setNumber((number) => (number < 1 ? number : number - 1));
  };

  return (
    <>
      <div>{number}</div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
};

export default App;
