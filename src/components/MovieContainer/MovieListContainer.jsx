import MovieList from "./MovieList"
import { useSelector } from "react-redux";

const MovieListContainer = () => {

    const movies = useSelector((store) => store.movies)

    console.log(movies)
    if (movies.nowPlayingMovies === null) return

    // console.log(movies.topRatedMovies)

    return(
        <div className="bg-black">
            <div className=" -mt-40 relative z-50"> 
            <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
            <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies}/>
            <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
            </div>
           
        </div>
    )
}

export default MovieListContainer