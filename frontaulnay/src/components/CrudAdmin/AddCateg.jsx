import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
const apiHandler = new APIHandler("/categories");


export default class AddCateg extends Component {
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    
    handleSubmit = async (evt) => {
        evt.preventDefault();
        await apiHandler.createOne(this.state);
        this.props.history.push("/annonces");

    };

    render() {
        return (
            <div className="add-categ">
                <h1 className="annonce-main-title"> Créer une catégorie</h1>

              <div className="bloc-connect">
              <form
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                >
                    <br />
                    <label htmlFor="category_name" className="label-addcateg">Nom de la catégorie à créer : </label>
                    <input type="text" name="category_name" className="input-addcateg" placeholder="Nom de la catégorie" />
                    <br />
                    <label htmlFor="picture" className="label-addcateg">Choisissez l'image de la catégorie : </label>
                    <input type="text" name="picture" className="input-addcateg" placeholder="Insérez le lien de l'image." />
                    <br/>
                    <button className="btn-editannonce">Créer</button>
                </form>
              </div>
            </div>
        )
    }
}
