import React, { Component } from 'react';
import { apiHandler } from './../../api/handler';
const handler = apiHandler();


export default class UserInfos extends Component {
    state = {
        isEditMode: false,
        first_name: "",
        last_name: "",
        email: "",
      };
      
      handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

      updateUser = async (e) => {
        e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page
    
        try { 
          const apiRes = await handler.patch(
            "/user/" + this.props.context.currentUser._id,
            { // ci-dessous : prend la valeur du state (si modifié) OU la valeur originale provenant de AuthContext
              first_name: this.state.first_name || this.props.context.currentUser.first_name,
              last_name: this.state.last_name || this.props.context.currentUser.last_name,
              email: this.state.email || this.props.context.currentUser.email,
            }
          );
          console.log(apiRes);
          this.props.context.setCurrentUser(apiRes.data); // mise à jour AuthContext avec les nouvelles infos user
          console.log("dsdsdsd",apiRes.data);
        } catch (apiErr) {
          console.error(apiErr);
        }
      };

    render() {
        return (
            <div className="user-info">
<form
        onChange={this.handleChange}
        onSubmit={this.updateUser}
        className="form"
      >
        <h3 className="title">Mes informations : </h3>
        <input
          className="input"
          type="text"
          name="first_name"
          defaultValue={this.props.context.currentUser.first_name}
        />
        <input
          className="input"
          type="text"
          name="last_name"
          defaultValue={this.props.context.currentUser.last_name}
        />
        <input
          className="input"
          type="text"
          name="email"
          defaultValue={this.props.context.currentUser.email}
        />
        <button className="btn">Mettre à jour</button>
      </form>
            </div>
        )
    }
}
