import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "../utils/moviesSlice";
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer :{
        user : userSlice,
        movies : moviesSlice,
        search : searchSlice
    }
})

export default appStore