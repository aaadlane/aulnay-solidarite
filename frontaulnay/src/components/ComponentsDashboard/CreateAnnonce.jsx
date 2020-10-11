import React, { Component } from 'react';
import AuthContext from "./../auth/AuthContext";
import axios from "axios";


export default class CreateAnnonce extends Component {
    state = {
        categories: []
    }

    static contextType = AuthContext;

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();

        const { id_category,
            title,
            description,
            active } = this.state;

        await axios.post(process.env.REACT_APP_BACKEND_URL + '/annonce', { 
            id_user: this.context.currentUser._id,
            id_category,
            title,
            description,
            createdAt: Date.now(),
            active
        });

        this.props.history.push("/annonces");
    };

    async componentDidMount() {
        const categories = await axios.get(process.env.REACT_APP_BACKEND_URL + '/categories')
        this.setState({ categories: categories.data })
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="create-annonce">
                <h1>Créer une annonce </h1>
            <div className="bloc-connect">
            <form className="form"
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>
                    <br />
                    <label htmlFor="title" className="label"> Titre de l'annonce :</label>
                    <input type="text" name="title" className="input" placeholder="Quel est le titre de l'annonce ?" />
                    <br />
                    <label htmlFor="description" className="label">Description de l'annonce : </label>
                    <input type="text" name="description" className="input" placeholder="Quelle est la description de l'annonce" />
                    <br />
                    <label htmlFor="id_category" className="label"> Choisir la catégorie : </label>
                    <select name="id_category" id="id_category">
                        <option>choisir</option>
                        {categories.map((categ, i) => {
                            return <option value={categ._id} key={i}> {categ.category_name}</option>
                        })}
                    </select>
                    <br />
                    <label htmlFor="active" className="active"> Statut de l'annonce : </label>
                    <select name="active" id="active">
                        <option>Choisir</option>
                        <option value="true">active</option>
                        <option value="false">inactive</option>
                    </select>
                    <br />
                    <button className="btn-editannonce">Créer l'annonce</button>
                </form>
            </div>
            </div>
        )
    }
}