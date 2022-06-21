import { useEffect, useState } from "react";

// State management
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userScore, compScore } from "../features/scores/Scores";

// Utils
import { gameLogic, generatedOption } from "../../utils/gameLogic";

// Components
import Select from "../Select/Select";
import { Link } from "react-router-dom";

const Playground = () => {
  const [compSelected, setCompSelected] = useState<string>("");
  const selected = useAppSelector((state) => state.selected.selected);
  const score = useAppSelector((state) => state.score);
  const dispatch = useAppDispatch();

  const dispatchScore = () => {
    if(gameLogic(selected, compSelected) === 0) {
      return dispatch(userScore())
    } else if(gameLogic(selected, compSelected) === 1) {
      return dispatch(compScore())
    } else {
      return
    };
  }

  useEffect(() => {
    setCompSelected(generatedOption());
  }, [selected]);

  useEffect(() => {
    dispatchScore()
  },[selected, compSelected])

  return (
    <div>
      
      <div>
        <p>You: {score.userScore}</p>
        <p>Comp: {score.compScore}</p>
      </div>
      <div>
        <img src={`../../images/${selected}.svg`} alt={selected} />
        {compSelected && (
          <img src={`../../images/${compSelected}.svg`} alt={compSelected} />
        )}
      </div>
      <div>
        <p>
          {gameLogic(selected, compSelected) === 0 ? "You won! Congratz!" : ""}
          {gameLogic(selected, compSelected) === 1 ? "Sorry, computer won." : ""}
          {gameLogic(selected, compSelected) === 2 ? "It's a Draw." : ""}
        </p>
      </div>
      
      <div>
        <p>Do you want to play again?</p>
          <Link to="/select">
            <button>
            Play again?
            </button>
          </Link>
      </div>
      
    </div>
  );
};

export default Playground;
