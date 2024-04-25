import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name : 'search', 
    initialState : {
        showSearchBar : false,
        searchMovies : null,
        searchValue : ""
    },
    reducers : {
        setShowSearchBar : (state , action) => {
            state.showSearchBar = !state.showSearchBar
        },
        setSearchMovies : (state, action) => {
            state.searchMovies = action.payload
        },
        clearSearchMovies : (state , action) => {
            state.searchMovies = null
        },
        setInputValue : (state, action) => {
            state.searchValue = action.payload
        }
    }
}) 


export const { setShowSearchBar, setSearchMovies , clearSearchMovies, setInputValue } = searchSlice.actions
export default searchSlice.reducer