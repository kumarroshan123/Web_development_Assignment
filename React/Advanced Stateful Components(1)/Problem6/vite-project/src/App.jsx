import { useReducer, useState } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    switch (action) {
      case "INCREMENT":
        return state + 1;
        break;
      case "DECREMENT":
        return state - 1;
        break;
      default:
        return state;
    }
  }

  return (
    <>
      <div className="Counter">
        <h1>Count</h1>
        <h1>{state}</h1>
        <div><button
          onClick={() => {
            dispatch("INCREMENT");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch("DECREMENT");
          }}
        >
          -
        </button></div>
        
      </div>
    </>
  );
}

export default App;
