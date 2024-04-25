import { useEffect, useState } from "react";
import { api_options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovies } from "../utils/searchSlice";
import MovieList from "./MovieContainer/MovieList";

const SearchPage = () => {

  const dispatch = useDispatch()
  const searchValue = useSelector(store => store.search.searchValue)
  const [movies , setMovies] = useState(null)

  const getSearchedMovies = async () => {
    console.log(searchValue)
    if(searchValue){
        const response = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+searchValue+"&include_adult=false&language=en-US&page=1",
            api_options
          );
          const searchedMovie = await response.json();
          if(searchedMovie) {
              dispatch(setSearchMovies(searchedMovie.results))
              setMovies(searchedMovie.results)
          }
    }
  };
  useEffect(() => {
    getSearchedMovies();
  }, []);
  if(!movies) return <div>Cant find The movies</div>
  return(
    <div className="relative top-28 bg-black">
        <MovieList title = {"Top Results"} movies = {movies}/>
    </div>
  )
};

export default SearchPage;
