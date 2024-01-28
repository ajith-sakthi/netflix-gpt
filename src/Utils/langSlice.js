import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        language:"en"
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.language=action.payload;
        }
    }
})

export const{addLanguage}=configSlice.actions;

export default configSlice.reducer;