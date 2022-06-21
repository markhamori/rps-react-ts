import React from "react";
import { Link } from "react-router-dom";

// Style
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1 className="notfound__title">404. Not Found.</h1>
      <Link to="/">
        <button className="notfound__button">Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
