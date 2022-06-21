import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Rules</h1>
      <ol>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maxime, praesentium veniam quas et expedita ut quisquam molestiae.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maxime, praesentium veniam quas et expedita ut quisquam molestiae.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maxime, praesentium veniam quas et expedita ut quisquam molestiae.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maxime, praesentium veniam quas et expedita ut quisquam molestiae.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maxime, praesentium veniam quas et expedita ut quisquam molestiae.</li>
      </ol>
        <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Rules;
