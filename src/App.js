import { useState } from "react";
function Counter() {
  let [count, setCount] = useState(0);
  let [factor, setFactor] = useState(1);
  const handleIncrement = () => {
    setCount(count + factor);
  };
  const handleDecrement = () => {
    setCount(count - factor);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleUpdateFactor = (inputFactor) => {
    if (inputFactor) {
      setFactor(inputFactor);
    } else {
      setFactor(1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        Tell me a factor by which Increment and Decrement you want to perform.
        <input
          type="number"
          value={factor}
          onChange={(e) => handleUpdateFactor(e.target.valueAsNumber)}
        ></input>
      </div>
    </div>
  );
}
export default Counter;
