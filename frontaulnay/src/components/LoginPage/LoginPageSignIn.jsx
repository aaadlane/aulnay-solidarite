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
    return (<div className="LoginPage">

      <form
        onChange={this.handleInput}
        onSubmit={this.handleSubmit}
        className="form"
      >
        <h1 className="title">Signin</h1>
        <label htmlFor="email" className="label">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="input"
          defaultValue={this.state.email}
          autoComplete="email"
        />
        <label htmlFor="password" className="label">
          password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="input"
          defaultValue={this.state.password}
          autoComplete="current-password"
        />
        <button className="btn">ok</button>
        <hr />
        <p>
          No account yet ? please{" "}
          <Link className="link" to="/signup">
            sign up
          </Link>
          .
        </p>
      </form>
    </div>
    );
  }
}
