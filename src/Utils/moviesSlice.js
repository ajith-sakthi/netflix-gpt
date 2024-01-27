import {createSlice} from "@reduxjs/toolkit";
const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null,
        topRatedMovies:null,
        upcomingMovies:null
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies = action.payload
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
        }
    }
})

export const{addNowPlayingMovies,addMovieTrailer,addTopRatedMovies,addPopularMovies,addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;