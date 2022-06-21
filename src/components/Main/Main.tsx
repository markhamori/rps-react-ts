import React from "react";
import { Link } from "react-router-dom";

// Style
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <h1>Rock, paper, scissors</h1>
      <Link to="/select">
        <button>Play!</button>
      </Link>
    </div>
  );
};

export default Main;
