import { useSelector } from "react-redux";
import useDisplayTrailer from "../hooks/useDisplayTrailer";

const VideoContainer = ({ videoId }) => {
    useDisplayTrailer(videoId)
  const displayTrailer = useSelector((store) => store.movies?.displayTrailer);
  console.log(displayTrailer)

  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          displayTrailer?.key +
          "?si=XNY_Wbxrj7a7kQKV&rel=0&autoplay=1&mute=1&showinfo=0&controls=0"
        }
        // title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
