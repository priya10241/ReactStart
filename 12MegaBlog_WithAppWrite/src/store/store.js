import {configureStore} from "@reduxjs/toolkit";

import authReducer from "../store/AuthSlice"
const Store = configureStore({
    reducer : authReducer
})

export default Store;