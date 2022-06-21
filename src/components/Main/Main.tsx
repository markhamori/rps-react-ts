import { Link } from "react-router-dom";

// Style
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <h1 className="main__title">Rock, paper, scissors</h1>
      <Link to="/select">
        <button className="main__title-button">Play!</button>
      </Link>
    </div>
  );
};

export default Main;
