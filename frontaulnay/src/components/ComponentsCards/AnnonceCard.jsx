import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";


export default function AnnonceCard({ annonce }) {
    return (
        <div className="annonce-card">
            <section className="conteneur-card">
                <h1 className="category">{annonce.id_category.category_name}</h1>
                <h1 className="annonce-title">{annonce.title}</h1>
                <figure className="fig-img">
                    <img src={annonce.id_category.picture} alt="category" className="img-category" />
                </figure>
                <h2 className="posted-by">{annonce.id_user.first_name} {annonce.id_user.last_name}</h2>
                <h3 className="creation-date">{moment(annonce.createdAt).format('DD/MM/YYYY')}</h3>
                <p className="description">{annonce.description}</p>
                <Link to={"/messagerie/" + annonce.id_user._id + "/" + annonce._id}>
                    <button className="btn-dash"> Envoyer un message </button>
                </Link>
            </section>

        </div>
    )
}

