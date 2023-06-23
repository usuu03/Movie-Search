import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const displayList = movies.map((movie, i) => {
    return (
      <div className="dib" key={i}>
        <MovieCard
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
        />
      </div>
    );
  });

  return (
    <div>
      {displayList}
    </div>
  );
}

export default MovieList;
