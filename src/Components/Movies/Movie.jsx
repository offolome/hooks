import React from "react";

const Movie = ({film}) => {
    return(
        <tr>
            <td>{film.id}</td>
            <td>{film.titre}</td>
            <td>{film.description}</td>
            <td>
                <video src="" controls />
                <a href={film.posterUrl}>{film.posterUrl}</a>
            </td>
            <td>{film.note}</td>
        </tr>
    );
}

export default Movie;