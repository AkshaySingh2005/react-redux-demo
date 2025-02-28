import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./slices/counter";

const App = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(increment())} style={{ margin: "5px" }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: "5px" }}>
        Decrement
      </button>
      <div>
        <input
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Enter amount"
          style={{ margin: "10px 0" }}
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
          style={{ margin: "5px" }}
        >
          Increment by Amount
        </button>
        <button
          onClick={() => dispatch(decrementByAmount(amount))}
          style={{ margin: "5px" }}
        >
          Decrement by Amount
        </button>
      </div>
    </div>
  );
};

export default App;
