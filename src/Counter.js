import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Unhandled Action Error");
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const increase = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const decrese = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrese}>-1</button>
    </div>
  );
}

export default Counter;