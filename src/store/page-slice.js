import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const initialState = {
  pageState: "home",
  movies: data,
  bookmark: [],
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    change(state, action) {
      state.pageState = action.payload.param;

      if (action.payload.param === "home") {
        state.movies = data;
      } else if (
        action.payload.param === "Movie" ||
        action.payload.param === "TV Series"
      ) {
        state.movies = data.filter(
          (item) => item.category === action.payload.param
        );
      }
    },
    toggleBookMark(state, action) {
      const existingItem = state.bookmark.find(
        (item) => item.title === action.payload.item.title
      );
      console.log(action);
      if (!existingItem) state.bookmark.push(action.payload.item);
      if (existingItem)
        state.bookmark = state.bookmark.filter(
          (item) => item.title !== action.payload.item.title
        );
    },

    // filterBySearch(state, action) {
    //   action.payload
    //     ? (state.movies = state.movies.filter((item) =>
    //         item.title.includes(action.payload)
    //       ))
    //     : (state.movies = data.filter(
    //         (item) => item.category === state.pageState
    //       ));
    // },
  },
});

export const pageActions = pageSlice.actions;

export default pageSlice;
