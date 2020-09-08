import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>

                <p>
                    <Link to="/messagerie">messagerie</Link><br/>
                    <Link to="/manageannounce">manager annonce</Link><br/>
                    <Link to="/editprofile">modifier ses données/profil</Link><br/>
                    <Link to="/createannonce">créer annonce</Link><br/>
                    <Link to="/dashboardadmin">Dashboard Admin</Link>    
                </p>
            </div>
        )
    }
}
