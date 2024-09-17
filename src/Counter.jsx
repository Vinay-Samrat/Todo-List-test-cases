import React, { useState } from "react";

function Counter({title}) {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <div className="div">
        <h2 id="title">{title}</h2>
        <span className="count">{count}</span>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
