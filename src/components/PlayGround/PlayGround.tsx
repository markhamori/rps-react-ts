import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// State management
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userScore, compScore } from "../features/scores/Scores";

// Utils
import { gameLogic, generatedOption } from "../../utils/gameLogic";

// Style
import "./Playground.css";

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
        <h2 className="playground__scores-title">
          You
          <br />
          <span>{score.userScore}</span>
        </h2>
        <h2 className="playground__scores-title">
          Computer
          <br />
          <span>{score.compScore}</span>
        </h2>
      </div>

      <div className="playground__result">
        <h1 className="playground__result-title">
          {gameLogic(selected, compSelected) === 0
            ? "You scored! Congratz!"
            : ""}
          {gameLogic(selected, compSelected) === 1
            ? "Sorry, computer scored."
            : ""}
          {gameLogic(selected, compSelected) === 2
            ? "It's a Draw. No score."
            : ""}
        </h1>
      </div>

      <div className="playground__images">
        <div className="playground__images--block">
          <img src={`./images/${selected}.svg`} alt={selected} />
          <h5>Your choice</h5>
          <p>{selected}</p>
        </div>
        <div className="playground__images--block">
          {compSelected && (
            <img src={`./images/${compSelected}.svg`} alt={compSelected} />
          )}
          <h5>Comp choice</h5>
          <p>{compSelected}</p>
        </div>
      </div>

      <div className="playground__options">
        <Link to="/select">
          <button className="playground__options-button">Play again?</button>
        </Link>
        <button
          className="playground__options-button"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Playground;
