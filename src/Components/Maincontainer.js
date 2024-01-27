import { useSelector } from "react-redux";

import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Maincontainer = () => {
  const nowPlayingMovieList = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  if (!nowPlayingMovieList) return;

  const mainMovie = nowPlayingMovieList[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default Maincontainer;
