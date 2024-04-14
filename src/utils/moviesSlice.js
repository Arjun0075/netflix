import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "Moives",
    initialState : {
        nowPlayingMovies : null,
        popularMovies : null,
        topRatedMovies : null,
        displayTrailer : null
    },
    reducers : {
        addNowPlayingMovies : (state , action) => {
            state.nowPlayingMovies = action.payload
        },
        addDisplayTrailer : (state , action) => {
            state.displayTrailer = action.payload
        },
        addPopularMovies : (state , action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies : (state , action) => {
            state.topRatedMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies , addDisplayTrailer , addPopularMovies , addTopRatedMovies} = moviesSlice.actions
export default moviesSlice.reducer