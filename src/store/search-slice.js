import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { searchFilter: "" },
  reducers: {
    change(state, action) {
      state.searchFilter = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
