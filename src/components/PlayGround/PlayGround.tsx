import { useEffect, useState } from "react";

// State management
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userScore, compScore } from "../features/scores/Scores";

// Utils
import { gameLogic, generatedOption } from "../../utils/gameLogic";

// Components
import Select from "../Select/Select";
import { Link } from "react-router-dom";

// Images
import rock from "../../images/rock.svg"
import paper from "../../images/paper.svg"
import scissors from "../../images/scissors.svg"

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
    <div className="playground">
     
      <div className="playground__scores">
        <h2><span>{score.userScore}</span><br/>You</h2>
        <h2><span>{score.compScore}</span><br/>Comp</h2>
      </div>

      <div className="playground__result">
        <h1>
          {gameLogic(selected, compSelected) === 0 ? "You won! Congratz!" : ""}
          {gameLogic(selected, compSelected) === 1 ? "Sorry, computer won." : ""}
          {gameLogic(selected, compSelected) === 2 ? "It's a Draw." : ""}
        </h1>
      </div>

      <div className="playground__images">
        <div className="playground__images--div">
          <img src={`./images/${selected}.svg`} alt={selected} />
          <p>{selected}</p>
        </div>
        <div className="playground__images--div">
          {compSelected && (
            <img src={`./images/${compSelected}.svg`} alt={compSelected} />
            )}
          <p>{compSelected && compSelected}</p>
        </div>
        
      </div>
      
      <div>
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
