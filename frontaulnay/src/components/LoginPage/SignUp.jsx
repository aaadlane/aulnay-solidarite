import React, { Component } from 'react'
import axios from 'axios'

export default class SignUp extends Component {
    state = {};

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });

    };
    handleSubmit = async (evt) => {
        evt.preventDefault();


        const adress = {
            district: this.state.adress_area,
            street_number: this.state.adress_number,
            street: this.state.adress_street
        }
        const gender = this.state.gender;
        const age = this.state.age;
        const Profile_type = this.state.Profile_type;
        const email = this.state.email;
        const password = this.state.password;
        const first_name = this.state.first_name;
        const last_name = this.state.last_name;
        // const avatar = this.state.avatar;
        const description = this.state.description;



        await axios.post("http://localhost:5555/user", { adress, email, age, password, first_name, last_name, description, gender, Profile_type });


    };

    render() {
        return (
            <div className="signup">

                <form className="form"
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>

                    <h1 className="title">Modifier mon compte</h1>

                    <br />
                    <label htmlFor="email" className="label">Adresse Mail : </label>
                    <input id="email" name="email" type="email" className="input" placeholder="john@doe.com" />

                    <br />
                    <label htmlFor="password" className="label">Mot de passe : </label>
                    <input id="password" name="password" type="password" className="input" minLength="6" placeholder="123456" />

                    <br />
                    <label htmlFor="first_name" className="label">Prénom : </label>
                    <input id="first_name" name="first_name" type="text" className="input" placeholder="johnny" />

                    <br />
                    <label htmlFor="last_name" className="label">Nom de famille : </label>
                    <input id="last_name" name="last_name" type="text" className="input" placeholder="fire" />

                    <br />
                    <label htmlFor="age" className="label">Age : </label>
                    <input id="age" name="age" type="number" className="input" placeholder="age" />

                    {/* <br />
                    <label htmlFor="avatar" className="label">Photo de profil : </label>
                    <input id="avatar" name="avatar" type="file" className="input" accept="image/png, image/jpeg" /> */}

                    <br />
                    <label htmlFor="description" className="label">Votre Description : </label>
                    <input id="description" name="description" type="text" className="input" placeholder="this is it" />

                    <br />
                    <h3>Adresse : </h3> <h5>(réservé aux Aulnaysiens)</h5>
                    <label htmlFor="adress-street" className="label">Rue : </label>
                    <input id="adress-street" name="adress_street" type="text" className="input" placeholder="delacroix" />

                    <br />
                    <label htmlFor="adress-number" className="label">Numéro : </label>
                    <input id="adress-number" name="adress_number" type="number" className="input" placeholder="2" />

                    <br />
                    <label htmlFor="adress-area" className="label">Quartier :  </label>
                    <input id="adress-area" name="adress_area" type="text" className="input" placeholder="vieux pays" />

                    <br />



                    <label htmlFor="Profile_type" className="label"> Profil utilisateur  </label>
                    <select name="Profile_type" id="Profile_type">
                        <option value="">Choisissez votre type de profil:</option>
                        <option value="association">Représentant d'une association</option>
                        <option value="user">Utilisateur régulier</option>
                    </select>



                    <br />
                    <label htmlFor="gender" className="label"> Choix du sexe  </label>
                    <select name="gender" id="gender">
                        <option value="">Choisissez votre sexe:</option>
                        <option value="Male">Homme</option>
                        <option value="Female">Femme</option>
                    </select>




                    <br />
                    <button className="btn">create !!!</button>
                </form>
            </div>
        )
    }
}
