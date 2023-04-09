import { createSlice } from "@reduxjs/toolkit";
import { filterItems } from "../utils/function";



const darkModSlice=createSlice(
    {
        name:"darkMod",
        initialState:{
            isDarkMod:false
        },
        reducers:{
            toggle:(state,action)=>{
                state.isDarkMod=!state.isDarkMod
            }
        }
    }
)

export const {toggle}=darkModSlice.actions

export default darkModSlice.reducer