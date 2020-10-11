import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <footer>
            <ul>
                <Link to="/">
                    <li>©Solidarité Aulnay 2020</li>
                </Link>
                <Link to="/signin">
                    <li>Se connecter</li>
                </Link>
                <Link to="/cgu">
                    <li>CGU</li>
                </Link>
                <Link to="/contact" >
                    <li>Nous contacter</li>
                </Link>
            </ul>
        </footer>
    )
}
