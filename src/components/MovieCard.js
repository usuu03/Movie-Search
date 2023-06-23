import React from "react";

const MovieCard = ({ title, poster, year }) => {
  return (
    <div className="bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 flex flex-column justify-between" style={{ width: "200px", height: "300px" }}>
      <div>
        <p className="truncate">{title}</p>
        <img src={poster} alt="MOVIE POSTER" style={{ maxWidth: "120px", height: "150px" }} />
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
