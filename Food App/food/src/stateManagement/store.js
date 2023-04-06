import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"

/*
Here we have created a store, using configureStore function. This will be single store which will 
be provided to our store

This store will contain multiple slices using recucer

remembter inside reducer  It will be like....  sliceName : slice
 */

const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default store