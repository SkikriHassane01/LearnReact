import React, { useState } from 'react';

function MyComponents() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(c =>  c + 1);
    setCount(c =>  c + 1);

  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponents;
