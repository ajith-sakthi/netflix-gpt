import { createSlice } from "@reduxjs/toolkit";

const toggleGptSearchSlice = createSlice({
  name: "gptsearch",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    viewGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { viewGptSearch } = toggleGptSearchSlice.actions;
export default toggleGptSearchSlice.reducer;
