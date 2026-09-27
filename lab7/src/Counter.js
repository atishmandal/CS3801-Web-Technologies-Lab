import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-page">
      <div className="counter-card">
        <h2 className="counter-title">React Counter</h2>
        <div className="counter-value">{count}</div>
        <div className="counter-buttons">
          <button className="btn btn-minus" onClick={decrement}>-</button>
          <button className="btn btn-reset" onClick={reset}>Reset</button>
          <button className="btn btn-plus" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;