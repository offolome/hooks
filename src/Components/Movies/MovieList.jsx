import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import Films from "../../Data/film";

const MovieList = ({films}) => {
    
    return(
            <table className="table-movie">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Titre</th>
                        <th>Description</th>
                        <th>Post</th>
                        <th>Note</th>
                        <th>Editer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Films.map((films) => {
                            return <Movie film={films} />
                        })
                    }
                </tbody>
            </table>
    );
}

export default MovieList;