import React, { useState } from "react";
import NouveauFilm from "../../Form/nouveauFilm";
import MovieList from "./MovieList";
import Films from "../../Data/film";

const MoviePanel = () => {
    
    const [movies, setMovies] = useState(Films);

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
            </div>
            <div className="card-List">
                <MovieList films={movies}/>
            </div>
        </>
    );
}

export default MoviePanel;