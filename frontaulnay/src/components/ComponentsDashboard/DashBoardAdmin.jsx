import React from 'react';
import {Link} from 'react-router-dom';

export default function DashBoardAdmin() {
    return (
        <div className="dashboard-admin">
            <h1>Dashboard Admin</h1>

            <Link to="/annonceadmin">Annonce Admin</Link> <br/>   
            <Link to="/categorieadmin">Categorie Admin</Link>    <br/>
            <Link to="/usersadmin">Users Admin</Link>    <br/>
            {/* <Link to="/associationadmin">Associations Admin</Link>     */}
        </div>
    )
}
