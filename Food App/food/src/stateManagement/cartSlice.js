import { createSlice } from "@reduxjs/toolkit";
import { filterItems } from "../utils/function";

//Here We are creating slice using createSlice function
//It will have 3 properties:
  /*
     name,initialState and reducers

     reducers is there to modify the state of slices. It will contain multiple actions, And for each action there is a reducer function

     Like, when we dispatch action1, reducer func1 will be call, for action2, reducer func2 will be call etc

     Remember how we exporting the reducers and actions

     export reducers : export default cartSlice.reducer
     export actions : export const {addItem,clearCart}=cartSlice.actions
  */ 

const cartSlice=createSlice(
    {
        name:"cart",
        initialState:{
            items:[],
        },
        reducers:{
            addItems:(state,action)=>{
                state.items.push(action.payload )
            },
            removeItems:(state,action)=>{
                state.items=filterItems(state.items,action.payload)
            },
            clearCart:(state,action)=>{
                state.items=[]
            }
        }
    }
)

export const {addItems,removeItems,clearCart}=cartSlice.actions

export default cartSlice.reducer