import { api_options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMoviesData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        api_options
      );
      const data = await response.json()
      // console.log(data)
      dispatch(addNowPlayingMovies(data.results))
    //   console.log(data.results)
  
    };
  
    useEffect(()=> {
      getNowPlayingMoviesData()
    }, [])
}

export default useNowPlayingMovies