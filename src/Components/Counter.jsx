import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>

      <span style={{ margin: "10px" }}>{count}</span>

      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;