import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <button>
        <Link to="/select">
          Start
        </Link>
      </button>
    </div>
  );
};

export default Main;
