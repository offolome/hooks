import React, { useState } from "react";
import { Link } from "react-router-dom";
import Films from "../../Data/film";
import movieCard from "./movieCard.css";

const MovieCard = () => {
  // Etat initial des données d'un film
  const [movies, setMovies] = useState(Films); // Fonction d'affichage des cartes
  return (
    <>
      <div className="main">
        {
          movies.map((movie) => (
            <div className="card-container">
              <div className="card-movie" key={movie.id}>
                <div className="video">
                  <iframe src={movie.posterUrl} frameborder="0"></iframe>
                </div>
                <div className="description">
                  <h2>{movie.titre}</h2> <br />
                  <Link to="/detailsMovies">
                    <span>
                      Plus
                    </span>
                  </Link>
                  <br /> <br /><br />
                  <h5>avis sur le film: {movie.note}</h5>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default MovieCard;
