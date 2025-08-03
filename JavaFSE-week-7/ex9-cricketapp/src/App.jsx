import { useState } from "react";
import ListOfPlayers from "./ListOfPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <h1>Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>Toggle View</button>
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
