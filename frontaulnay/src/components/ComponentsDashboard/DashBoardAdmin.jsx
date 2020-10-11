import React from 'react';
import {Link} from 'react-router-dom';

export default function DashBoardAdmin() {
    return (
        <div className="dashboard">
            <h1 className="dash-title">Dashboard Admin</h1>

            <div className="dash-links">
            <Link to="/annonceadmin">Annonce Admin</Link>  
            <hr/>  
            <Link to="/categorieadmin">Categorie Admin</Link>    
            <hr/>
            <Link to="/usersadmin">Users Admin</Link>
            </div>    
        </div>
    )
}
