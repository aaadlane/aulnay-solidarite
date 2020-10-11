import React, { Component } from 'react'
import { APIHandler } from './../../api/handler';
const annoncesHandler = new APIHandler("/annonce");

export default class EditAnnonces extends Component {

    state = {
        annonces: {}
    }

    async componentDidMount() {
        const apiRes = await annoncesHandler.getById(this.props.match.params.id);
        this.setState(apiRes.data);
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    handleSubmit = async (evt) => {
        evt.preventDefault();
        await annoncesHandler.updateOne(this.state._id, this.state)
    };

    render() {
        const annonces = this.state
        const categories = this.state.id_category

        return (
            <div className="edit-annonces">
                <h1>Edit Annonce</h1>
              <div className="bloc-connect">
              <form className="form" onSubmit={this.handleSubmit}>
                    <h3> <span className="holotitle">Nom de la catégorie :</span> {categories !== undefined ? categories.category_name : ''} </h3>
                    <br />
                    <label htmlFor="title" className="label"> Modifier le titre de l'annonce : </label>
                    <input type="text" name="title" className="input" placeholder={annonces.title} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="description" className="label"> Modifier la descritpion de l'annonce : </label>
                    <input type="text" name="description" className="input" placeholder={annonces.description} onChange={this.handleChange} />

                    <label htmlFor="active" className="active"> Statut de l'annonce : </label>
                    <select name="active" id="active" onChange={this.handleChange}>
                        <option value="true">active</option>
                        <option value="false">inactive</option>
                    </select>
                    <br />
                    <button className="btn-editannonce">Modifier</button>
                </form>
              </div>
            </div>
        )
    }
}
