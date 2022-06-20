import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  selected: string;
};

const initialState: InitialState = {
  selected: "rock",
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    selected: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { selected } = selectedSlice.actions;

export default selectedSlice.reducer;
