import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  userScore: number;
  compScore: number;
};

const initialState: InitialState = {
  userScore: 0,
  compScore: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    userScore: (state) => {
      state.userScore++;
    },
    compScore: (state) => {
      state.compScore++;
    },
  },
});

export const { userScore, compScore } = scoreSlice.actions;

export default scoreSlice.reducer;
