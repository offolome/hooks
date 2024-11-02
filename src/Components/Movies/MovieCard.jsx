import React from "react";

const MovieCard = ({ films }) => {
  return (
    <>
      <div className="main">
        {films.map((film) => (
          <div className="card-container">
            <div className="card-movie">
              <div className="video">
                <iframe src={film.posterUrl} frameborder="0"></iframe>
              </div>
              <div className="description">
                <h2>{film.titre}</h2>
                <p>{film.description}</p>
                <h5>{film.note}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
