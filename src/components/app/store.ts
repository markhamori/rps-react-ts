import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/scores/Scores";
import selectedReducer from "../features/selected/Selected";

const store = configureStore({
  reducer: {
    score: scoreReducer,
    selected: selectedReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
