import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./../auth/AuthContext";

export default class Signin extends Component {
  state = {
    // définition de valeurs de base pour la phase de dev ("mettre à chaîne vide une fois dev ok")
    email: "",
    password: "",
  };

  static contextType = AuthContext; // on associe le contexte d'authentification à la classe Signin (accessible via this.context)

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault(); //  no page refresh
    this.context.signin(this.state, () => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    return (
      <div className="login-page">
        <h1 className="title">Connexion</h1>

        <div className="bloc-connect">
          <form
            onChange={this.handleInput}
            onSubmit={this.handleSubmit}
            className="form"
          >
            <label htmlFor="email" className="label">
              Votre mail :
        </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input-signin"
              defaultValue={this.state.email}
              autoComplete="email"
            />
            <label htmlFor="password" className="label">
              Choisir votre mot de passe :
        </label>
            <input
              id="password"
              name="password"
              type="password"
              className="input-signin"
              defaultValue={this.state.password}
              autoComplete="current-password"
            />
            <button className="btn-signin">ok</button>

          </form>
        </div>
        <p className="text-signup">
          Vous n'avez pas encore de compte ?{" "}
          <Link className="link" to="/signup">
            Cliquez ici pour vous inscrire.
          </Link>
        </p>
      </div>
    );
  }
}
