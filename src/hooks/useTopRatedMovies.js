import { api_options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()

    const getTopratedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        api_options
      );
      const data = await response.json()
      // console.log(data)
      dispatch(addTopRatedMovies(data.results))
    //   console.log(data.results)
  
    };
  
    useEffect(()=> {
        getTopratedMovies()
    }, [])
}

export default useTopRatedMovies;