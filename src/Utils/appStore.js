import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice";
import gptReducer from "./toggleGptSearchSlice";
import configReducer from "./langSlice";
const appStore= configureStore({
    reducer:{
        name:userReducer,  
        movies:moviesReducer,
        gptSearch:gptReducer,
        config:configReducer
    }
})

export default appStore;
