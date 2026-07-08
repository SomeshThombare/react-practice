import React, { useState } from 'react';

function AsyncStateExample() {
  const [count, setCount] = useState(0);

  const handleUpdate = () => {
    console.log("Before updates:", count); // Logs: 0

    // These updates are batched and asynchronous
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    console.log("After updates:", count); // Logs: 0 (NOT 3!)
    
    // The state will only update AFTER this function finishes executing,
    // triggering a re-render with the new value.
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleUpdate}>Increment 3 Times</button>
      <p>Check the console to see that 'count' is 0 even after calling setCount three times.</p>
    </div>
  );
}

export default AsyncStateExample;   