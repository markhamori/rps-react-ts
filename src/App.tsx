import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BiHelpCircle } from "react-icons/bi"

// Components
import Main from "./components/Main/Main";
import Playground from "./components/Playground/Playground";
import Rules from "./components/Rules/Rules";
import Select from "./components/Select/Select";

const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="app">
      <div className="app_rules">
        <div className="app__rules--handler" onClick={() => setOpenModal(!openModal)}>
          <p>
            <span>
              <BiHelpCircle/>
            </span>
            Rules
          </p>
        </div>
        {openModal && (
          <Rules/>
        )}
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
