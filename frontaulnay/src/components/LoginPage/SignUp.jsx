import React, { Component } from 'react'
// import { APIHandler } from './../../api/handler';
import AuthContext from "./../auth/AuthContext";
// const apiHandler = new APIHandler("/user");


export default class SignUp extends Component {
    state = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        age: "",
        avatar: "",
        description: "",
        adress_street: "",
        adress_street_number: "",
        adress_district: "",
        Profile_type: "",
        gender: "",
    };

    static contextType = AuthContext; // la classe Signup est désormais 'abonnée' au AuthProvider, il consome les infos du provider
    fileInput = React.createRef(); // on créé une référence ici, utilisée sur le l'input file plus bas


    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });

    };

    handleSubmit = async (e) => {
        e.preventDefault(); // classique : empêche l'event submit du formulaire de rafraîchir la page

        const { first_name, last_name, email, password, age, description, adress_street, adress_street_number, adress_district, Profile_type, gender } = this.state; // destructuration de l'objet this.state
        const avatar = this.fileInput.current.files[0]; // on récupère la valeur de l'input file référencé
        const fd = new FormData(); // formData est obligatoire pour envoyer des files (ex: avatar) vers le backend
        // check la doc : https://developer.mozilla.org/fr/docs/Web/API/FormData

        fd.append("first_name", first_name); // on ajoute des,
        fd.append("last_name", last_name); // clé / valeurs,
        fd.append("email", email); // dans l'objet ...
        fd.append("password", password); // fd :D
        fd.append("age", age); // fd :D
        fd.append("description", description); // fd :D
        fd.append("adress_street", adress_street); // fd :D
        fd.append("adress_street_number", adress_street_number); // fd :D
        fd.append("adress_district", adress_district); // fd :D
        fd.append("Profile_type", Profile_type); // fd :D
        fd.append("gender", gender); // fd :D

        if (avatar) fd.append("avatar", avatar);
        // avant de passer l'objet formData (fd) à components/auth/AuthProvider
        // la ligne déclarée plus haut (static contextType) est accessible via this.context
        this.context.signup(fd, () => {
            this.props.history.push("/signin"); // redirection vers la page de signin
        });
    };
    // ma version
    // handleSubmit = async (evt) => {
    //     evt.preventDefault();
    //     const apiRes = await apiHandler.createOne(this.state);
    //     console.log(apiRes);
    // };


    render() {
        return (
            <div className="signup">
                <h1 className="title-signup">Créer mon compte</h1>

                <div className="yellow-box-signup">
                <form className="form-signup"
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>

                    <label htmlFor="email" className="label">Adresse Mail : </label>
                    <input id="email" name="email" type="email" className="input" autoComplete="username" />


                    <label htmlFor="password" className="label">Mot de passe : </label>
                    <input id="password" name="password" type="password" className="input" minLength="6" autoComplete="current-password" />


                    <label htmlFor="first_name" className="label">Prénom : </label>
                    <input id="first_name" name="first_name" type="text" className="input" />


                    <label htmlFor="last_name" className="label">Nom de famille : </label>
                    <input id="last_name" name="last_name" type="text" className="input" />
                    <br />
                    <label htmlFor="avatar" className="label">
                        Avatar :
                    </label>
                    <input id="avatar"
                        name="avatar"
                        type="file"
                        className="is-hidden"
                        ref={this.fileInput} // la référence créé dans la classe est associée à cet input file
                    />

                    <label htmlFor="age" className="label">Age : </label>
                    <input id="age" name="age" type="number" className="input" />

                    {/* 
                    <label htmlFor="avatar" className="label">Photo de profil : </label>
                    <input id="avatar" name="avatar" type="file" className="input" accept="image/png, image/jpeg" /> */}


                    <label htmlFor="description" className="label">Votre Description : </label>
                    <input id="description" name="description" type="text" className="input" />


                    <h3>Adresse : </h3> <h5>(réservé aux Aulnaysiens)</h5>
                    <label htmlFor="adress.street" className="label">Rue : </label>
                    <input id="adress.street" name="adress.street" type="text" className="input" />


                    <label htmlFor="adress.street_number" className="label">Numéro : </label>
                    <input id="adress.street_number" name="adress.street_number" type="number" className="input" />


                    <label htmlFor="adress.district" className="label">Quartier :  </label>
                    <input id="adress.district" name="adress.district" type="text" className="input" />

                    {/* <label htmlFor="Profile_type" className="label"> Profil utilisateur  </label>
                    <select name="Profile_type" id="Profile_type">
                        <option value="">Choisissez votre type de profil:</option>
                        <option value="association">Représentant d'une association</option>
                        <option value="user">Utilisateur régulier</option>
                    </select> */}

                    <label htmlFor="gender" className="label"> Choix du sexe  </label>
                    <select name="gender" id="gender">
                        <option value="">-</option>
                        <option value="Male">Homme</option>
                        <option value="Female">Femme</option>
                    </select>





                    <button className="btn-signup">Créer mon compte</button>
                </form>
                </div>
            </div>
        )
    }
}
