enum options {
  "rock" = 0,
  "paper" = 1,
  "scissor" = 2,
}

const randomNumber = (): number => {
  return Math.floor(Math.random() * 3);
};

export const generatedOption = (): string => options[randomNumber()];
