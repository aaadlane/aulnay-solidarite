import React from 'react';

export default function AnnonceCard() {
    return (
        <div className="annonce-card">

            <section className="conteneur-card">
                <h1 className="category">Catégorie de l'annonce</h1>
                <h1 className="annonce-title">Titre de l'annonce</h1>
                <figure className="fig-img">
                    <img src="https://i.pinimg.com/originals/5b/b4/8b/5bb48b07fa6e3840bb3afa2bc821b882.jpg" alt="category" className="img-category" />
                </figure>
                <h2 className="posted-by">Postée par :</h2>
                <h3 className="creation-date">Le : </h3>
                <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem illo neque aspernatur et sint vitae quasi nam similique? Autem nisi, architecto consectetur omnis quos molestias sequi eum sed possimus delectus.</p>
            </section>

        </div>
    )
}
