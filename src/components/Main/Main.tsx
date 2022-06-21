import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Rock, paper, scissors</h1>
      <button>
        <Link to="/select">
          Start
        </Link>
      </button>
    </div>
  );
};

export default Main;
