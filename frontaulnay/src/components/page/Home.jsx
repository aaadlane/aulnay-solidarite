import React from 'react';
import {Link} from 'react-router-dom'


export default function Home() {
    return (
        <div className="home" >
            <div className="block-one-texte">
                <h1>Bienvenue chez Solidarité Aulnay</h1>
                <h2>Ici, vous pouvez proposer de l'aide à nos utilisateurs et en demander également, vous pouvez retrouver nos différentes annonces en cliquant <Link to="/annonces">ici</Link>.
                </h2>
            </div>

        </div>
    )
}
