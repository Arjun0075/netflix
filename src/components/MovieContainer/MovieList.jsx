import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
//   console.log(movies);


  return (
    <div className="pl-10 pb-7">
      <div className="text-3xl py-4 text-white font-bold">{title}</div>
      <div className="flex overflow-x-auto">
        <div className="flex">
        {
           movies && movies.map(movie => 
                <MovieCard key={movie.id} movie = {movie}/>
            )
        }
        {/* <MovieCard movie={movies[0]}/> */}
       
        </div>
      </div>
    </div>
  );
};

export default MovieList;
