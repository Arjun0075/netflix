import MovieCard from "./MovieCard";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const MovieList = ({ title, movies }) => {
  //   console.log(movies);

  const slideLeft = () => {
    const slider = document.getElementById(title)
    slider.scrollLeft = slider.scrollLeft - 700
  }

  const slideRight = () => {
    const slider = document.getElementById(title)
    slider.scrollLeft = slider.scrollLeft + 700
  }

  return (
    <div className="pl-10 pb-7">
      <div className="text-3xl py-4 text-white font-bold">{title}</div>
      <div className="flex relative items-center">
        <MdChevronLeft onClick={slideLeft} size={150} className="fill-white p-3 hover:scale-x-110"/>
        <div
          id={title}
          className="flex overflow-y-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        <MdChevronRight onClick={slideRight} size={150} className="fill-white hover:scale-x-110"/>
      </div>
    </div>
  );
};

export default MovieList;
