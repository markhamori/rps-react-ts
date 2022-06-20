import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userScore, compScore } from "../features/scores/Scores";
import { generatedOption } from "../../utils/computerNumGen";
import { gameLogic } from "../../utils/gameLogic";

const Playground = () => {
  const [compSelected, setCompSelected] = useState<string>("");
  const selected = useAppSelector((state) => state.selected.selected);
  const score = useAppSelector((state) => state.score);
  const dispatch = useAppDispatch();

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
      <button onClick={() => dispatch(userScore())}>User+</button>
      <button onClick={() => dispatch(compScore())}>Comp+</button>
    </div>
  );
};

export default Playground;
