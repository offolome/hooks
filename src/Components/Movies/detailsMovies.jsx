import React, { useState, useEffect } from "react";
import details from "./details.css";
import Films from "../../Data/film";
import { Link, useParams } from "react-router-dom";

const DetailsMovies = () => {
    // Fonction de lien de navigation sur la bande-annonce
    const movieId = useParams().id;
    const movie = Films.find((element) => {
        return element.id == movieId;
    })
    // if(!movie) {
    //     return <p>Film pas trouvé</p>
    // }

    return (
        <>
            <div id="navBand">
                <div className="annonce">
                    <Link to="/" className="link">
                        <span>retour</span>
                    </Link>
                    <h2>Bande annonce</h2>
                </div>
            </div>
            <div className="read">
                <div className="readUrl">
                    <iframe src={movie.posterUrl} frameborder="0"></iframe>
                </div>
                <div className="description1">
                    <p>{movie.description}</p>
                </div>
            </div>
        </>
    );
}

export default DetailsMovies;