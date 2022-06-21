import React from "react";

const Rules = () => {
  return (
    <div className="rules__modal">
      <h3>
        Here you can choose from the elements: rock, paper and scissors. The
        outcome of the game is determined by 4 simple rules:
      </h3>
      <p>
        <span>1</span> Rock wins against scissors.
      </p>
      <p>
        <span>2</span> Scissors win against paper.
      </p>
      <p>
        <span>3</span> Paper wins against rock.
      </p>
      <p>
        <span>4</span> Draw/tie if the elements are the same.
      </p>
    </div>
  );
};

export default Rules;
