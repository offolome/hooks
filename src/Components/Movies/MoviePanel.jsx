import React, { useState } from "react";
import NouveauFilm from "../../Form/nouveauFilm";
import MovieList from "./MovieList";
import Films from "../../Data/film";
import Filter from "../Search/Filter";

const MoviePanel = () => {
    
    // Initialisation des éléments avec useState
    const [movies, setMovies] = useState(Films);

    // Fonction ajouter un nouveau film
    const handleSubmit = (newMovie) => {
        setMovies([...movies, newMovie])
    }

    return(
        <>
            <div className="panel">
                <h1>Panneau d'administration</h1>
            </div>
            <div className="btn-add">
                <NouveauFilm onSubmit={handleSubmit}/> 
                <Filter />
            </div>
            <div className="card-List">
                <MovieList films={movies}/>
            </div>
        </>
    );
}

export default MoviePanel;