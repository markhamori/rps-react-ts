import { Routes, Route, Link } from "react-router-dom";

// Components
import Main from "./components/Main/Main";

// Styles
import "./App.css";
import Playground from "./components/Playground/Playground";
import Rules from "./components/Rules/Rules";
import Select from "./components/Select/Select";

const App = () => {
  return (
    <div>
      <div>
        <h1>Rock, paper, scissors</h1>
        <button>
          <Link to="/rules">
            Rules
          </Link>
        </button>
      </div>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<Select />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </div>
  );
};

export default App;
