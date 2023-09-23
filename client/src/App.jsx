import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import UserForm from "./components/User.jsx";
import Game from "./components/game";

function App() {
  const [user, setUser] = useState("");
  const handleUser = (text) => {
    setUser(text);
  };

  return (
    <div className="App">
      <Header user={user} />
      <UserForm grabUser={handleUser} />
      {user ? <Game /> : null}
    </div>
  );
}

export default App;
