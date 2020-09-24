import React from 'react';
//import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle, faHammer, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";


export default function About() {
    return (
        <div className="about">
            <div className="first-section">
                <h1 className="firsth1">L'ENGAGEMENT CITOYEN AU CŒUR DE L'ACTION DES COLLECTIVITÉS</h1>
            </div>
            <div className="second-section">
                <h1 className="secondh1">CRÉER DES PONTS ET DU LIEN ENTRE LES ACTEURS</h1>
                <hr className="ptihr" />
                <p className="text-second-section">A l’heure ou l’engagement citoyen est plus que jamais d’actualité, Solidarité-Aulnay propose des outils permettant à chacun d’agir à son échelle. Chez Solidarité-Aulnay, nous sommes convaincus que le numérique peut être vecteur de rencontres solidaires, d’idées engagées et d’échanges collaboratifs !</p>
            </div>
            <div className="third-section">
                <h1 className="thirdh1">Nos Valeurs</h1>
                <hr className="ptihr" />
                <div className="farecycle">
                    <FontAwesomeIcon size="2x" icon={faRecycle} className="icon-recycle" />
                </div>
                <p className="text-section3">
                    <span className="majuscule">
                        <span className="motrouge"> SIMPLIFIER
                        </span>
                         L’ENGAGEMENT CITOYEN
                        </span>
                    <br />
                        et le rendre accessible à tous</p>

                {/* deuxieme paragraph */}

                <div className="farecycle">
                    <FontAwesomeIcon size="2x" icon={faHammer} className="icon-recycle" />
                </div>
                <p className="text-section3">
                    <span className="majuscule">
                        <span className="motrouge"> CONSTRUIRE
                        </span>
                        UNE SOCIÉTÉ                        </span>
                    <br />
                    d’intérêt commun, éthique, collaborative et écologique
                </p>

                {/* TROISIEME PARAG */}
                <div className="farecycle">
                    <FontAwesomeIcon size="2x" icon={faPuzzlePiece} className="icon-recycle" />
                </div>
                <p className="text-section3">
                    <span className="majuscule">
                        <span className="motrouge"> FÉDÉRER
                        </span>
                        L’ENSEMBLE DES ACTEURS
                    </span>
                    <br />
                    de la société autour de projets à impact positif
                </p>
            </div>
            <div className="fourth-section">
                <h1 className="thirdh1">DEVENEZ ACTEURS D'UNE SOCIÉTÉ SOLIDAIRE, INCLUSIVE ET INNOVANTE</h1>
                <hr className="ptihr" />
                <div className="text-section-four">
                    <h3>POUR UNE <span className="motrouge">COLLECTIVITÉ DURABLE</span> ET ENGAGÉE</h3>
                    <ul>
                        <li>Développement de l’innovation sociale et renforcement de la cohésion sociale</li>
                        <li>Outil alternatif en soutien de la croissance des associations</li>
                        <li>Vision et mesure de l’impact et de la vie associative</li>
                    </ul>
                </div>
                <div className="text-section-four">
                    <h3>POUR DES CITOYENS <span className="motrouge">ACTIFS ET ENGAGÉS</span></h3>
                    <ul>
                        <li>Implication dans la vie locale</li>
                        <li>Co-construction d’une collectivité positive et inclusive </li>
                        <li>Développement de l’entraide et de l’utilité sociale</li>
                    </ul>
                </div>
                <div className="text-section-four">
                    <h3>POUR UN <span className="motrouge">TISSU ASSOCIATIF DYNAMIQUE</span> ET INNOVANT </h3>
                    <ul>
                        <li>Émulation de la vie associative</li>
                        <li>Accompagnement au virage numérique</li>
                        <li>Accroissement de la mobilisation autour de projets locaux</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
