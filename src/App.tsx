import { Routes, Route } from "react-router-dom";

// Components
import Main from "./components/Main/Main";

// Styles
import "./App.css";
import Select from "./components/Select/Select";
import Playground from "./components/Playground/Playground";
import Rules from "./components/Rules/Rules";

const App = () => {
  return (
    <div>
      <h1>Rock, paper, scissors</h1>
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
