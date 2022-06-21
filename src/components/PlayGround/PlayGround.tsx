import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// State management
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userScore, compScore } from "../features/scores/Scores";

// Utils
import { gameLogic, generatedOption } from "../../utils/gameLogic";

const Playground = () => {
  const [compSelected, setCompSelected] = useState<string>("");
  const selected = useAppSelector((state) => state.selected.selected);
  const score = useAppSelector((state) => state.score);
  const dispatch = useAppDispatch();

  const dispatchScore = () => {
    if (gameLogic(selected, compSelected) === 0) {
      return dispatch(userScore());
    } else if (gameLogic(selected, compSelected) === 1) {
      return dispatch(compScore());
    } else {
      return;
    }
  };

  useEffect(() => {
    setCompSelected(generatedOption());
  }, [selected]);

  useEffect(() => {
    dispatchScore();
  }, [selected, compSelected]);

  return (
    <div className="playground">
      <div className="playground__scores">
        <h2>
          <span>{score.userScore}</span>
          <br />
          You
        </h2>
        <h2>
          <span>{score.compScore}</span>
          <br />
          Comp
        </h2>
      </div>

      <div className="playground__result">
        <h1>
          {gameLogic(selected, compSelected) === 0 ? "You won! Congratz!" : ""}
          {gameLogic(selected, compSelected) === 1
            ? "Sorry, computer won."
            : ""}
          {gameLogic(selected, compSelected) === 2 ? "It's a Draw." : ""}
        </h1>
      </div>

      <div className="playground__images">
        <div className="playground__images--div">
          <img src={`./images/${selected}.svg`} alt={selected} />
          <h5>Your choice</h5>
          <p>{selected}</p>
        </div>
        <div className="playground__images--div">
          {compSelected && (
            <img src={`./images/${compSelected}.svg`} alt={compSelected} />
          )}
          <h5>Comp choice</h5>
          <p>{compSelected}</p>
        </div>
      </div>

      <Fragment>
        <Link to="/select">
          <button>Play again?</button>
        </Link>
        <button onClick={() => window.location.reload()}>Reset</button>
      </Fragment>
    </div>
  );
};

export default Playground;
