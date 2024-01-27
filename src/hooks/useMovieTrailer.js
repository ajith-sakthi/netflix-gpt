import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useMovieTrailer = (movieId) => {
  // const [trailerId,settrailerId]=useState(null)
  const dispatch = useDispatch();
  const movietrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    console.log(movieId);
    const json = await data.json();
    // console.log(json);

    const filteredTrailerTypeOnly = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredTrailerTypeOnly.length
      ? filteredTrailerTypeOnly[0]
      : json.results[0];
    console.log(trailer);
    // settrailerId(trailer.key);
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    movietrailer();
  }, []);
};

export default useMovieTrailer;
