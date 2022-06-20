import { Link } from "react-router-dom";
import { selected } from "../features/selected/Selected";
import { useAppDispatch } from "../app/hooks";

const Select = () => {
  const dispatch = useAppDispatch();

  const handleSelect = (e: any) => {
    return e.target.textContent;
  };

  return (
    <div>
      <Link to="/playground">
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          rock
        </button>
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          paper
        </button>
        <button onClick={(e) => dispatch(selected(handleSelect(e)))}>
          scissor
        </button>
      </Link>
    </div>
  );
};

export default Select;
