import React, { useState } from "react";

const NouveauFilm = () => {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [note, setNote] = useState('');
    const [show, setShow] = useState(true);
    const [movieList, setMovieList] = useState();

    const newMovie = {
        titre,
        description,
        posterUrl,
        note
    }

    const newBtn = () => {
        setShow(!show);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(titre, description, posterUrl, note)
    }
    return(
        <div className="bloc-form">
            <div className="add-movie">
                <button className="btn-movie" onClick={newBtn}>Nouveau film</button>
            </div>
            
            <div className="container">
                {show && (
                    <form onSubmit={handleSubmit}>
                        <h2>Enregistrer un nouveau Film</h2>
                        <div className="titre">
                            <label htmlFor="Titre">Titre</label>
                            <input value={titre} onChange={e => setTitre(e.target.value)} type="text" className="titre" placeholder="Le titre du film" />
                        </div>
                        <div className="description">
                            <label htmlFor="Description">Description</label> <br />
                            <textarea value={description} onChange={e => setDescription(e.target.value)} name="description" id="description" rows={10} cols={60} />
                        </div>
                        <div className="posterUrl">
                            <label htmlFor="PosterUrl">Post</label>
                            <input value={posterUrl} onChange={e => setPosterUrl(e.target.value)} type="file" className="posterUrl" />
                        </div>
                        <div className="note">
                            <label htmlFor="Note">Note</label>
                            <input value={note} onChange={e => setNote(e.target.value)} type="number" className="note" placeholder="Mettez la note" />
                        </div>

                        <div className="add">
                            <button className="btn-add">Ajouter</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default NouveauFilm;