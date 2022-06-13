import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./slices/peopleSlice";

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});
