import { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    console.log("Hello! Counter increased.");
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    console.log("Synthetic Event Triggered:", e);
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Event Examples</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />

      <button onClick={() => sayWelcome("Welcome to React Event Handling!")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={handleClick}>Synthetic Event (OnPress)</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
