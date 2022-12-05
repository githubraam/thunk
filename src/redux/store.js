import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import formdataSlice from "./formdataSlice";

export const store = configureStore({
    reducer:{
        formdata: formdataSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
