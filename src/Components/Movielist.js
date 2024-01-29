import React from "react";
import Moviecards from "./Moviecards";

const Movielist = ({ title, movies }) => {
  return (
    movies && (
        <div className="pl-4 md:pl-10 pt-6"> 
        <h1 className="text-2xl md:text-3xl text-white">{title}</h1>
        <div className="flex overflow-x-auto pt-2 pr-2 no-scrollbar">
         <div className="flex"> 
          {movies.map((movie) => (
            <Moviecards key={movie?.id }posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
      </div>
    )
  );
};

export default Movielist;
