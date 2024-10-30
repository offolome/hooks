import React from "react";

const MovieCard = ({ films }) => {
  return (
    <>
      <div>
        {films.map((film) => (
          <div className="card-container">
            <div className="card-movie">
              <iframe src={film.posterUrl} frameborder="0"></iframe>
              <p>{film.titre}</p>
              <p>{film.description}</p>
              <p>{film.note}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
