import React, { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {render(count, () => setCount(count + 1))}
    </div>
  );
};

const RenderProps = () => {
  return (
    <Counter
      render={(count, increment) => (
        <>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
        </>
      )}
    />
  );
};

export default RenderProps;
