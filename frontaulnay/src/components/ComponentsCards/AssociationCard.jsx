import React from 'react'

export default function AssociationCard() {
    return (
        <div className="association-card">



            <section className="association-conteneur">
                <h1 className="association-name"> Nom de l'assoc</h1>
                <h2 className="user-associated">Utilisateur lié à l'association</h2>
                <figure className="fig-img-association">
                    <img src="https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg" alt="" className="association-img" />
                </figure>
                <section className="adress-container">
                    <h1 className="city-country-and-zip">Ville - Code Postal - pays</h1>
                    <h2 className="street-area-number">Num, nom de la rue, quartier</h2>
                </section>

            </section>
        </div>
    )
}
