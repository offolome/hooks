import React, { useState } from "react";
import Films from "../../Data/film";
import details from "./details.css";

const DetailsMovies = () => {

    const [movies, setMovies] = useState(Films) // Fonction d'affichage bande annonce

    return (
        <div className="body">
            <div className="container">
                <h2>Bande annonce</h2>
            </div>
            {
                movies.map((movie) => (
                    <div className="description">
                        <div className="description-images">
                            <img src="" alt="image de l'annonce" />
                        </div>
                        <div className="description-movie">
                            <div key={movie.id}>
                                <p>{movie.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default DetailsMovies;