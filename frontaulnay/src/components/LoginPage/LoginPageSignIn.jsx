import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class LoginPageSignIn extends Component {
    render() {
        return (
            <div className="LoginPage">
                <h1>Signin</h1>
                <Link to="/signup">S'inscrire.</Link>
                <form action="/signin"></form>
                <form className="form">
                    <h1 className="title">connexion</h1>
                    <label htmlFor="price" className="label">Adresse Mail : </label>
                    <input  name="email" type="email" className="input" required />
                    <br />
                    <label htmlFor="price" className="label">Mot de passe : </label>
                    <input name="password" type="password" className="input" minLength="6" required />
                    <br />
                    <button className="btn">Se connecter</button>
                </form>


            </div>

        )
    }
}
