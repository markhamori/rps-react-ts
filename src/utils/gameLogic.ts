// Const options
enum options {
  "rock" = 0,
  "paper" = 1,
  "scissors" = 2,
}

// Generate a random number
const randomNumber = (): number => {
  return Math.floor(Math.random() * 3);
};

// Return computer's choice
export const generatedOption = (): string => options[randomNumber()];

// Game logic
export const gameLogic = (userOption: string, compOption: string): number => {
  switch (userOption) {
    case "rock":
      if (compOption === "scissors") return 0;
      if (compOption === "paper") return 1;
      break;

    case "scissors":
      if (compOption === "paper") return 0;
      if (compOption === "rock") return 1;
      break;

    case "paper":
      if (compOption === "rock") return 0;
      if (compOption === "scissors") return 1;
      break;
  }

  return 2;
};
