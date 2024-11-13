import React, { useState } from "react";
import NouveauFilm from "../../Form/nouveauFilm";
import MovieList from "./MovieList";
import Films from "../../Data/film";
import Filter from "../Search/Filter";
import { BsArrowLeftSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import moviePanel from "./moviePanel.css";


const MoviePanel = () => {

    // Initialisation des éléments avec useState
    const [movies, setMovies] = useState(Films);

    // Fonction ajouter un nouveau film
    const handleSubmit = (newMovie) => {
        setMovies([...movies, newMovie])
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/'); // Naviguer vers la page d'accueil
    }

    return (
        <>
            <div className="panel">
                <div className="icon">
                    <BsArrowLeftSquare onClick={handleClick} size={40} />
                </div>
                <h1>Panneau d'administration</h1>
            </div>
            <div className="btn-add">
                <NouveauFilm onSubmit={handleSubmit} />
            </div>
            <div className="tri">
                <Filter />
            </div>
            <div className="card-List">
                <MovieList films={movies} />
            </div>
        </>
    );
}

export default MoviePanel;