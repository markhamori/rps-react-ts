import React from "react";

const Rules = () => {
  return (
    <div className="rules__modal">
      <h3>Although the game has a lot of complexity to it, the rules to play it are pretty simple.
          The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules:
      </h3>
        <p><span>1</span> Rock wins against scissors.</p>
        <p><span>2</span> Scissors win against paper.</p>
        <p><span>3</span> Paper wins against rock.</p>
        <p><span>4</span> Draw in case of same elements</p>
    </div>
  );
};

export default Rules;
