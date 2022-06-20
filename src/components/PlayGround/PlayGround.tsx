import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import { userScore, compScore } from "../features/scores/Scores";

import { generatedOption } from "../../utils/computerNumGen";
import { gameLogic } from "../../utils/gameLogic";

const Playground = () => {
  const [compSelected, setCompSelected] = useState<string>("");
  const selected = useAppSelector((state) => state.selected.selected);
  const score = useAppSelector((state) => state.score);
  const dispatch = useAppDispatch();

  // (function () {
  //   if (gameLogic(selected, compSelected) === 0) dispatch(userScore());
  //   if (gameLogic(selected, compSelected) === 1) dispatch(compScore());
  // })();

  useEffect(() => {
    setCompSelected(generatedOption());
  }, []);

  return (
    <div>
      <h1>Playground page</h1>
      <p>You: {score.userScore}</p>
      <p>Comp: {score.compScore}</p>
      <hr />
      <p>{selected}</p>
      <p>{compSelected && compSelected}</p>
      <hr />
      <p>
        {gameLogic(selected, compSelected) === 0 ? "You won! Congratz!" : ""}
        {gameLogic(selected, compSelected) === 1 ? "Computer won." : ""}
        {gameLogic(selected, compSelected) === 2 ? "Draw." : ""}
      </p>
      <hr />

      <button>
        <Link to="/select">Play again.</Link>
      </button>
    </div>
  );
};

export default Playground;
