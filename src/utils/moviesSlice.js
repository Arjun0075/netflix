import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "Moives",
    initialState : {
        nowPlayingMovies : null,
        displayTrailer : null
    },
    reducers : {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload
        },
        addDisplayTrailer : (state , action) => {
            state.displayTrailer = action.payload
        }
    }
})

export const {addNowPlayingMovies , addDisplayTrailer} = moviesSlice.actions
export default moviesSlice.reducer