import { configureStore } from "@reduxjs/toolkit";
import Auth from "./reducers/Auth";

const store = configureStore({
    reducer:{
        Auth
    }
})

export default store;