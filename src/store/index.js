import { createSlice, configureStore } from "@reduxjs/toolkit";
import React from "react";
import { combineReducers } from "redux";

const disneySlice = createSlice({
  name: "disney",
  initialState: { link: "", icon: "", talk: "" },
  reducers: {
    addlink(state, action) {
      state.link = action.payload;
    },
    addicon(state, action) {
      state.icon = action.payload;
    },
    talk(state, action) {
      state.talk = action.payload;
    },
  },
});

export const disneyAction = disneySlice.actions;
const store = configureStore({
  reducer: {
    disney: disneySlice.reducer,
  },
});
export default store;
