import React, { useState } from "react";
import Filter from "../Search/Filter";
import MovieCard from "./MovieCard";
import NouveauFilm from "../../Form/nouveauFilm";
import Films from "../../Data/film";

const Movie = () => {
  // Etat initial des données d'un film
  const [movies, setMovies] = useState(Films);

  // Fonction d'ajout d'un nouveau film
  const handleSubmit = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    // Affiche mes films sur cette page
    <>
      <div className="page_movie">Page des films</div>
      {/* Ajouter les données du film et Filtrer le titre et la note */}
      <div>
        <NouveauFilm onSubmit={handleSubmit} />
        <Filter />
      </div>

      {/* Afficher les données du film */}
      <div>
        <MovieCard films={movies} />
      </div>
    </>
  );
};

export default Movie;
