enum options {
  "rock" = 0,
  "paper" = 1,
  "scissors" = 2,
}

const randomNumber = (): number => {
  return Math.floor(Math.random() * 3);
};

export const generatedOption = (): string => options[randomNumber()];

export const gameLogic = (userOption: string, compOption: string): number => {
  if (userOption === "rock" && compOption === "scissors") return 0;
  if (userOption === "scissors" && compOption === "paper") return 0;
  if (userOption === "paper" && compOption === "rock") return 0;

  if (userOption === "scissors" && compOption === "rock") return 1;
  if (userOption === "paper" && compOption === "scissors") return 1;
  if (userOption === "rock" && compOption === "paper") return 1;

  return 2;
};