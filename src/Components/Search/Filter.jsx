import React, { useState } from "react";
import Films from "../../Data/film";


const Filter = () => {
  // Etat du tableau avec les données initiales
  const [movies, setMovies] = useState(Films);

  // Etat pour les critères de filtrage
  const [search, setSearch] = useState("");

  // Fonction de tri
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);

    // Fonction pour filtrer le tableau en fonction de deux critères
    const filteredTab = movies.filter(
      (movie) =>
        movie.titre.toLowerCase().includes(value) ||
        movie.note.toLowerCase().includes(value)
    );
    setMovies(filteredTab);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="search"
        placeholder="Rechercher par titre ou note"
      />

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.titre} - {movie.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
