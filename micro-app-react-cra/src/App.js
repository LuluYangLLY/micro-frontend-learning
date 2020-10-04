import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import { isLogin, login, logout } from "@test/micro-app-utils";

function App() {
  const [isLogined, setIsLogined] = useState(isLogin());
  const logOut = () => {
    logout();
    setIsLogined(false);
  };

  const logIn = () => {
    login();
    setIsLogined(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h3>isLogin: {isLogined.toString()}</h3>
          <button
            onClick={() => {
              isLogined ? logOut() : logIn();
            }}
          >
            {isLogined ? "Login Out" : "Log In"}
          </button>
        </section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
