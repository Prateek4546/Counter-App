import { useState } from "react";
import "./styles.css";
function Counter() {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);

  function handelIncrement() {
    setCount(count + +factor);
  }
  function handelDecrement() {
    setCount(count - +factor);
  }
  function handelRest() {
    setCount(0);
    setFactor(1);
  }
  function handelFactor(event) {
    setFactor(event.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Counter App</h1>
        </div>
        <div className="hr"></div>
        <div>
          <div className={count > 0 ? "green" : count < 0 ? "red" : "white"}>
            <h1>{count}</h1>
          </div>
        </div>
        <div className="handler">
          <div className="increment_decrement">
            <button onClick={handelIncrement}>Increment</button>
            <button onClick={handelDecrement}>Decrement</button>
          </div>
          <div className="factor">
            <h3>Increment / Decrement By : </h3>
            <input
              className="factorInput"
              value={factor}
              onChange={handelFactor}
            />
          </div>
          <button onClick={handelRest}>Reset</button>
        </div>
      </div>
    </>
  );
}
export default Counter;
