import React, { Component } from "react";
import { apiHandler } from "./../../api/handler";
const handler = apiHandler();

export default class Contact extends Component {
  state = {
    // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
    full_name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async (e) => {
    e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page
    const { full_name, email, subject, message } = this.state; // destructuration de l'objet this.state
    try {
      await handler.post("/api/contact", {
        full_name,
        email,
        subject,
        message,
      });
    } catch (err) {
      console.error(err.response.message);
    }
  };

  render() {
    return (
      <div className="contact">
          <form
        className="form"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <h1 className="title">Contact</h1>
        <label htmlFor="full_name" className="label">
          Votre nom :
        </label>
        <input
          name="full_name"
          id="full_name"
          type="text"
          className="input"
          defaultValue={this.state.full_name}
        />
        <label htmlFor="email" className="label">
          Email : 
        </label>
        <input
          name="email"
          type="email"
          className="input"
          defaultValue={this.state.email}
        />
        <label htmlFor="subject" className="label">
          Objet : 
        </label>
        <input
          name="subject"
          id="subject"
          type="text"
          className="input"
          defaultValue={this.state.subject}
        />
        <label htmlFor="message" className="label">
          Message :
        </label>
        <textarea
          name="message"
          id="message"
          className="input"
          defaultValue={this.state.message}
        ></textarea>
        <button className="btn">ok</button>
      </form>
      </div>
    );
  }
}
