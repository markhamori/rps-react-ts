import { Link } from "react-router-dom";
import { selected } from "../features/selected/Selected";
import { useAppDispatch } from "../app/hooks";

// Style
import "./Select.css";

const Select = () => {
  const dispatch = useAppDispatch();

  const handleSelect = (e: any) => {
    return e.target.textContent;
  };

  return (
    <div className="select">
      <h1 className="select__title">Select an element:</h1>

      <Link to="/playground">
        <button
          className="select__button"
          onClick={(e) => dispatch(selected(handleSelect(e)))}
        >
          rock
        </button>
        <button
          className="select__button"
          onClick={(e) => dispatch(selected(handleSelect(e)))}
        >
          paper
        </button>
        <button
          className="select__button"
          onClick={(e) => dispatch(selected(handleSelect(e)))}
        >
          scissors
        </button>
      </Link>
    </div>
  );
};

export default Select;
