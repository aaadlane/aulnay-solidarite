import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import AuthContext from "./../auth/AuthContext";



export default function Home() {
    const AuthContextValue = useContext(AuthContext);

    console.log("AuthContextValue ? >>> ", AuthContextValue);

    return (
        <div className="home" >
            <div className="block-one-texte">
                <h1>Bienvenue chez Solidarité Aulnay</h1>
                <h2>Ici, vous pouvez proposer de l'aide à nos utilisateurs et en demander également, vous pouvez retrouver nos différentes annonces en cliquant <Link to="/annonces">ici</Link>.
                </h2>


                <button className="button-main">Proposer ses services</button>
                <button className="button-main">Faire une demande</button>
                <button className="button-main">Consulter la liste des associations</button>

                </div>
                <section className="section-one">
                    <h1>Comment ça marche ? </h1>

                    <h2 className="section-one">1</h2>
                    <h3>Je crée mon compte</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores iste earum eveniet officia beatae libero consectetur reiciendis quisquam, harum sint voluptatem in. Praesentium eos doloribus aliquam suscipit voluptatem porro delectus?</p>
                    <button className="button-main">C'est parti !</button>

                </section>
            </div>
    )
}
