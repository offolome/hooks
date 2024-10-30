import React, { useState } from "react";
import Filter from "../Filter";
import MovieCard from "./MovieCard";
import Films from "../../Data/film";
import NouveauFilm from "../../Form/nouveauFilm";

const Movie = () => {

    // const [movies, setMovies] = useState(Films);

    // const handleSubmit = (newMovie) => {
    //     setMovies([...movies, newMovie])
    // }

    return(
        // Affiche mes films sur cette page 
        <>
            <div className="page_movie">
                Page des films
            </div>
            {/* Filtre le titre et la note du film */}
            <div>
                <Filter />
            </div>

            {/* Ajoute les données du film
            <div>
                <NouveauFilm onSubmit={handleSubmit}/> 
            </div> */}

            {/* Affiche les données du film */}
            <div>
                <MovieCard films={Films}/>
            </div>
        </>
    );
}

export default Movie;