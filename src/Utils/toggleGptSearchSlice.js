import { createSlice } from "@reduxjs/toolkit";

const toggleGptSearchSlice = createSlice({
  name: "gptsearch",
  initialState: {
    showGptSearch: false,
    tmdbResults:null,
      moviesName:null,
  },
  reducers: {
    viewGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies:(state,action)=>{
      const {moviesName,moviesTmdbResults}=action.payload
        state.moviesName=moviesName;
        state.tmdbResults=moviesTmdbResults;
    }
  }
});

export const { viewGptSearch,addGptMovies } = toggleGptSearchSlice.actions;
export default toggleGptSearchSlice.reducer;
