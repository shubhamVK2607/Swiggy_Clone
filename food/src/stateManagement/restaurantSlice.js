import { createSlice } from "@reduxjs/toolkit";


const restaurantSlice=createSlice(
    {
        name:"restaurant",
        initialState:{
            items:[],
        },
        reducers:{
            addRestaurant:(state,action)=>{
                state.items=action.payload
            },
           
        }
    }
)

export const {addRestaurant}=restaurantSlice.actions

export default restaurantSlice.reducer