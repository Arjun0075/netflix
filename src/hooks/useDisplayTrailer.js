import { useEffect } from "react";
import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addDisplayTrailer } from "../utils/moviesSlice";

const useDisplayTrailer =  (videoId) => {
  const dispatch = useDispatch();

  const getDisplayTrailer = async () => {
    const movieRes = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      api_options
    );
    const movieData = await movieRes.json();
    // console.log(movieData)
    const movieTrailers = movieData?.results?.filter(
      (videoType) => videoType.type === "Trailer"
    );

    const displayTrailer = movieTrailers.length
      ? movieTrailers[0]
      : movieData.results[0];
    dispatch(addDisplayTrailer(displayTrailer));
    // console.log(displayTrailer);
  };

  useEffect(() => {
    getDisplayTrailer();
  }, []);
};

export default useDisplayTrailer;
