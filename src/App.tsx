import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Components
import Main from "./components/Main/Main";
import Playground from "./components/Playground/Playground";
import Rules from "./components/Rules/Rules";
import Select from "./components/Select/Select";
import NotFound from "./components/NotFound/NotFound";

// Style
import "./App.css";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/playground") navigate("/");
  }, []);

  return (
    <div className="app">
      <Rules />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/select" element={<Select />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
