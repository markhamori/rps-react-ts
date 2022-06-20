import { Link } from "react-router-dom";
import { selected } from "../features/selected/Selected";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Select = () => {
  const dispatch = useAppDispatch();

  const handleSelect = (e: any) => {
    return e.target.textContent;
  };

  return (
    <div>
      <Link to="/playground">
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          Rock
        </button>
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          Paper
        </button>
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          Scissors
        </button>
      </Link>
    </div>
  );
};

export default Select;
