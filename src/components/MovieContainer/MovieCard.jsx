const MovieCard = ({ movie }) => {
//   console.log(movie);
  const { poster_path } = movie;

  // const getPosterImage = async (poster_path) => {
  //     const res = await fetch("https://image.tmdb.org/t/p/w500/"+poster_path)

  // }

  return (
    <div className="min-w-56 mr-5">
      <img  className="w-80 h-52" src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt="image" />
    </div>
  );
};

export default MovieCard;
