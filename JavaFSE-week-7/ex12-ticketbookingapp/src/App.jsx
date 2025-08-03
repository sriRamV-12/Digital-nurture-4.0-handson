import { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ticket Booking App</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
