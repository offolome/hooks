import React from "react";
import NouveauFilm from "../../Form/nouveauFilm";
import MovieList from "./MovieList";
import Films from "../../Data/film";


const MovieCard = () => {
    return(
        <div className="card-container">
            <div className="btn-add">
                <NouveauFilm />
            </div>
            <div className="card-List">
                <MovieList films={Films} />
            </div>
        </div>
    );
}

export default MovieCard;