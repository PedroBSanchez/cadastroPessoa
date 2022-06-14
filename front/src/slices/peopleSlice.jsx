import { createSlice } from "@reduxjs/toolkit/";

import axios from "axios";

const initialState = {
  people: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    //Colocar as requisições get da API aqui
  },
});

export const {} = peopleSlice.actions;

export default peopleSlice.reducer;
