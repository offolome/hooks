import React from "react";
import Filter from "../Filter";
import MovieCard from "./MovieCard";
import Films from "../../Data/film";

const Movie = () => {
    return(
        // Affiche mes films sur cette page 
        <>
            <div className="page_movie">
                Page des films
            </div>
            <div>
                <Filter />
            </div>
            <div>
                <MovieCard films={Films}/>
            </div>
        </>
    );
}

export default Movie;