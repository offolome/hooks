import React, { useState } from "react";

const NouveauFilm = ({onSubmit}) => {

    // Initialisation du tableau avec useState
    const [formState, setFormState] = useState({
        titre:"",
        description:"",
        posterUrl:"",
        note:"",
    });

    // Gestion des erreurs
    const [errors, setErrors] = useState("");

    // Initialisation de l'affichage du formulaire avec show et useState
    const [show, setShow] = useState(true);

    // Affiche le formulaire en cliquant sur le bouton nouveau film
    const newBtn = () => {
        setShow(!show);
    }

    // Fonction de validation du formulaire
    const validateForm = () => {
        if(formState.titre && formState.description && formState.posterUrl && formState.note) {
            setErrors("")
            return true;
        } else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)) {

                if(!value) {
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "))
            return false;
        }
    }

     // Fonction pour la mise à jour des données avec le setter
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    }

    // Fonction pour ajouter les données
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()) return;

        onSubmit(formState);
    }

    return(
        <div className="bloc-form">
            <div className="add-movie">
                <button className="btn-movie" onClick={newBtn}>Nouveau film</button>
            </div>
            
            {/* Affiche le formulaire si tu vois show */}
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
                        
                        {/* Message d'erreur */}
                        {errors && <div style={{color: 'red'}}>Veuillez remplir: {errors}</div>}
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