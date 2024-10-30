import React, { useState } from "react";

const NouveauFilm = ({onSubmit}) => {
    const [formState, setFormState] = useState({
        titre:"",
        description:"",
        posterUrl:"",
        note:"",
    })
    const [show, setShow] = useState(true);

    const newBtn = () => {
        setShow(!show);
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(formState);
    }

    return(
        <div className="bloc-form">
            <div className="add-movie">
                <button className="btn-movie" onClick={newBtn}>Nouveau film</button>
            </div>
            
            <div className="container">
                {show && (
                    <form>
                        <h2>Enregistrer un nouveau Film</h2>
                        <div className="titre">
                            <label htmlFor="Titre">Titre</label>
                            <input type="text" name="titre" value={formState.titre} onChange={handleChange} className="titre" placeholder="Le titre du film" />
                        </div>
                        <div className="description">
                            <label htmlFor="Description">Description</label> <br />
                            <textarea name="description" value={formState.description} onChange={handleChange} id="description" rows={10} cols={60} />
                        </div>
                        <div className="posterUrl">
                            <label htmlFor="PosterUrl">Post</label>
                            <input type="text" name="posterUrl" value={formState.posterUrl} onChange={handleChange} className="posterUrl" />
                        </div>
                        <div className="note">
                            <label htmlFor="Note">Note</label>
                            <input type="number" name="note" value={formState.note} onChange={handleChange} className="note" placeholder="Mettez la note" />
                        </div>

                        <div className="add">
                            <button className="btn-add" type="submit" onClick={handleSubmit}>Ajouter</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default NouveauFilm;