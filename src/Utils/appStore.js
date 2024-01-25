import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore= configureStore({
    reducer:{
        name:userReducer,  
    }
})

export default appStore;
