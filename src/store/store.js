import { configureStore } from "@reduxjs/toolkit";
import { searchSliceReducer } from "./feautures/searchSlice";

export const store = configureStore({
    reducer:{
        search:searchSliceReducer
    }
})