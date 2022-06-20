export const gameLogic = (userOption: string, compOption: string): void => {
  if (userOption === compOption) console.log("Draw");
  if (userOption === "rock" && compOption === "paper") console.log("Comp win.");
  if (userOption === "rock" && compOption === "scissor")
    console.log("User win.");
  if (userOption === "scissor" && compOption === "paper")
    console.log("User win.");
  if (userOption === "scissor" && compOption === "rock")
    console.log("Comp win.");
  if (userOption === "rock" && compOption === "scissor")
    console.log("User win.");

  console.log("No match");
};

function chooseWinner(possibleWays): void {
  possibleWays.forEach((option) => {
    console.log(option.description);
    option.printWinnerText();
  });
}

class UserIsAWinner {
  description: string;

  constructor(description: string) {
    this.description = description;
  }

  printWinnerText() {
    console.log("Congratz! You win!");
  }
}

const possibleWays = [new UserIsAWinner("User win.")];
