import React, { useState } from "react";
import Filter from "../Search/Filter";
import MovieCard from "./MovieCard";
import Header from "./Header";
import movie from "./movie.css";

const Movie = () => {
  return (
    // Affiche mes films sur cette page
    <>
      <div className="page_movie">
        <Header />
      </div>
      <div className="container">
        {/* Filtrer le titre et la note */}
        <div className="tri">
          <Filter />
        </div>
        {/* Afficher les données du film */}
        <div>
          <MovieCard />
        </div>
      </div>
    </>
  );
};
export default Movie;
