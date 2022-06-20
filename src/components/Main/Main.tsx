import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Main component</h1>
      <Link to="/select">
        <button>Start</button>
      </Link>
      <button>Reset</button>
      <Link to="/rules">
        <button>Rules</button>
      </Link>
    </div>
  );
};

export default Main;
