import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import pageSlice from "./page-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    page: pageSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
