import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <h1>Rock, paper, scissors</h1>
        <Link to="/select">
          <button>
              Start
          </button>
        </Link>
    </div>
  );
};

export default Main;
