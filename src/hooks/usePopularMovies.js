import {useDispatch} from "react-redux"
import { useEffect } from "react"
import { api_options } from "../utils/constants"
import { addPopularMovies } from "../utils/moviesSlice"

const usePopularMovies = () => {
    const dispatch = useDispatch()

    const getPopularMovies = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", api_options)
        const data = await res.json()

        //  console.log("Popular Movies" , data)
        dispatch(addPopularMovies(data.results))
    }

    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default usePopularMovies