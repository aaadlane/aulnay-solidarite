import React from 'react';
// import LinkLogin from "./../LinkLogin";
import { NavLink } from "react-router-dom";



export default function HeaderMain() {
    return (
        <div>
            <header className="header">
            <NavLink to="/">    <img src="https://res.cloudinary.com/dpdlhag1u/image/upload/v1597752904/logo-appiwedia-white_dg38qn.png" alt="logosite" className="logo-header" /></NavLink>
                <ul className="nav-links">

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/annonces">Annonces</NavLink></li>
                    <li><NavLink to="/associations">Associations</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/login">Se Connecter</NavLink></li>
                </ul>
            </header>
        </div>
    )
}
