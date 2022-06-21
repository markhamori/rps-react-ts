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
        <p>{selected}</p>
        <p>{compSelected && compSelected}</p>
      </div>
      <div>
        <p>
          {gameLogic(selected, compSelected) === 0 ? "You won! Congratz!" : ""}
          {gameLogic(selected, compSelected) === 1 ? "Computer won." : ""}
          {gameLogic(selected, compSelected) === 2 ? "Draw." : ""}
        </p>
      </div>
      
      <div>
        <p>Do you want to play again?</p>
        <button>
          <Link to="/select">
            Play again?
          </Link>
        </button>
      </div>
      
    </div>
  );
};

export default Playground;
