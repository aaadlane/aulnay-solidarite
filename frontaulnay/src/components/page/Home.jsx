import React from "react";
import { Link } from 'react-router-dom';
// import AuthContext from "./../auth/AuthContext";
import maintulipe from "./../../styles/images/mainjaune.jpg";

export default function Home() {
    // const AuthContextValue = useContext(AuthContext);

    // console.log("AuthContextValue ? >>> ", AuthContextValue);

    return (
        <div className="home" >
            <div className="block-one-texte">
                <h1 className="block1" style={{ color: 'var(--redcolor)' }}>Bienvenue chez Solidarité Aulnay</h1>
                <img src={maintulipe} alt="tulipe jaune" className="image-tulipe"/>
                <h2>Ici, vous pouvez proposer de l'aide à nos utilisateurs et en demander également, vous pouvez retrouver nos différentes annonces en cliquant <Link to="/annonces">ici</Link>.
                </h2>
                <div className="buttons-main">
                    <Link to="/createannonce">
                        <button className="button-main">Proposer ses services</button>
                    </Link>
                    <Link to="/createannonce">
                        <button className="button-main">Faire une demande</button>
                    </Link>
                    <Link to="/associations">
                        <button className="button-main">Consulter la liste des associations</button>
                    </Link>

                </div>
            </div>
            <div className="section-yellow">
                <div className="text-section">
                    <h1 className="h1-main">Comment ça marche ? </h1>
                    <div className="box-choice">
                        <section className="section-one">


                            <h2>1</h2>
                            <h3>Je crée mon compte</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores iste earum eveniet officia beatae libero consectetur reiciendis quisquam, harum sint voluptatem in. Praesentium eos doloribus aliquam suscipit voluptatem porro delectus?</p>
                            <Link to="/signup">
                                <button className="button-main">Je crée mon compte</button>
                            </Link>
                        </section>
                    </div>
                    <div className="box-choice">
                        <section className="section-one">


                            <h2>2</h2>
                            <h3>Je sollicite un bénévole</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores iste earum eveniet officia beatae libero consectetur reiciendis quisquam, harum sint voluptatem in. Praesentium eos doloribus aliquam suscipit voluptatem porro delectus?</p>
                            <Link to="/createannonce">
                                <button className="button-main">J'ai besoin d'un coup de main !</button>
                            </Link>
                        </section>
                    </div><div className="box-choice">
                        <section className="section-one">


                            <h2>3</h2>
                            <h3>Je rends service</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores iste earum eveniet officia beatae libero consectetur reiciendis quisquam, harum sint voluptatem in. Praesentium eos doloribus aliquam suscipit voluptatem porro delectus?</p>
                            <Link to="/createannonce">
                                <button className="button-main">Qui veut mon aide ?</button>
                            </Link>
                        </section>
                    </div>
                </div>
            </div >
        </div >
    )
}
