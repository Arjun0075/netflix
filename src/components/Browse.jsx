import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";

function Browse() {
  const showSearch = useSelector((store) => store.search.showSearchBar);

  console.log(showSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
