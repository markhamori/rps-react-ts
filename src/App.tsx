import { Routes, Route } from "react-router-dom";

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
        {/* <Rules/> */}
      </div>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<Select />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </div>
  );
};

export default App;
