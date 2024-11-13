import React, { useEffect, useState } from "react";
import movieList from "./movieList.css";

// Lister les films dans un tableau
const MovieList = ({films}) => {
  return (
    <div className="table">
      <table className="table-movie">
        <thead>
          <tr>
            <th>N°</th>
            <th>Titre</th>
            <th>Description</th>
            <th>Post</th>
            <th>Note</th>
            <th>Editer</th>
          </tr>
        </thead>
        <tbody>

          {/* Affichage des données dans le tableau */}
          {films.map((film, index) => (
            <tr key={film.id}>
              <td>{index + 1}</td>
              <td>{film.titre}</td>
              <td>{film.description}</td>
              <td>
                <iframe
                  width="560"
                  height="315"
                  src={film.posterUrl}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </td>
              <td>{film.note}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
