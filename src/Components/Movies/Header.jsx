import React, { useState } from "react";
import { Link } from "react-router-dom";
import header from "./header.css";

const Header = () => {
    // Fonction pour afficher le menu @media
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="body">
                <nav>
                    <section id="header">
                        <div className="header-movie">
                            <div className="header-movieLogo">
                                <img src="" alt="logo" />
                            </div>
                            <h2>BABIWOOD</h2>
                        </div>
                        <div className="navLinks">
                            <ul>
                                <li>
                                    <Link className="link" to="/">
                                        <span>Accueil</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/MoviePanel">
                                        <span>Nouveautés</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </section>
                </nav>
            </div>
        </>
    );
}

export default Header;