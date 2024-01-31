import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptMovieRecommendation = () => {
  const { moviesName, tmdbResults } = useSelector((store) => store.gptSearch);
  if (!moviesName) return null;

  return (
    <div className="m-2 md:p-4 md:m-4 bg-black bg-opacity-70">
      {moviesName.map((moviename, index) => (
        <Movielist
          key={moviename}
          title={moviename}
          movies={tmdbResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieRecommendation;
