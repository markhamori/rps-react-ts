import { useState } from "react";

// Icons
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

// Style
import "./Rules.css";

const Rules = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="rules">
      {openModal && (
        <div className="rules__modal">
          <h3 className="rules__modal-heading">
            Here you can choose from the elements: rock, paper and scissors. The
            outcome of the game is determined by 4 simple rules:
          </h3>
          <p className="rules__modal-paragraph">
            <span>1</span> Rock wins against scissors.
          </p>
          <p className="rules__modal-paragraph">
            <span>2</span> Scissors win against paper.
          </p>
          <p className="rules__modal-paragraph">
            <span>3</span> Paper wins against rock.
          </p>
          <p className="rules__modal-paragraph">
            <span>4</span> Draw/tie if the elements are the same.
          </p>
        </div>
      )}
      <div className="rules__handler" onClick={() => setOpenModal(!openModal)}>
        {openModal ? <AiOutlineCloseCircle /> : <BiHelpCircle />}
      </div>
    </div>
  );
};

export default Rules;
