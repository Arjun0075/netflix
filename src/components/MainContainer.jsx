import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // console.log(data)
  if (movies === null) return;

  const mainMovie = movies[0];
  // console.log(mainMovie)

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoContainer videoId={id} />
    </div>
  );
};

export default MainContainer;
