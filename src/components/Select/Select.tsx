import { Link } from "react-router-dom";
import { selected } from "../features/selected/Selected";
import { useAppDispatch } from "../app/hooks";

const Select = () => {
  const dispatch = useAppDispatch();

  const handleSelect = (e: any) => {
    return e.target.textContent;
  };

  return (
    <div className="select">
      <h1>Select an option:</h1>

      <Link to="/playground">
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          rock
        </button>
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          paper
        </button>
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          scissors
        </button>
      </Link>
    </div>
  );
};

export default Select;
