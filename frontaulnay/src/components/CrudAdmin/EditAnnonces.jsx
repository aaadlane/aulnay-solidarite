import React, { Component } from 'react'
import { APIHandler } from './../../api/handler';
const annoncesHandler = new APIHandler("/annonce");

export default class EditAnnonces extends Component {

    state = {
        annonces: {}
    }

    async componentDidMount() {
        console.log(this.props.match.params.id);
        const apiRes = await annoncesHandler.getById(this.props.match.params.id);
        console.log(apiRes);
        this.setState(apiRes.data);
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    handleSubmit = async (evt) => {
        evt.preventDefault();
        const apiRes = await annoncesHandler.updateOne(this.state._id, this.state)
        console.log(apiRes);
        console.log(this.state._id);
    };

    render() {
        const annonces = this.state
        console.log("22222", annonces)
        const categories = this.state.id_category
        console.log("333333", categories)

        return (
            <div className="edit-annonces">
                <h1>Edit Annonce</h1>
                <form className="form"
                    onSubmit={this.handleSubmit}>
                    <h3>Nom de la catégorie : {categories !== undefined ? categories.category_name : ''} </h3>
                    <br />
                    <label htmlFor="title" className="label"></label>
                    <input type="text" name="title" className="input" placeholder={annonces.title} onChange={this.handleChange} />
                    <br />
                    <label htmlFor="description" className="label"></label>
                    <input type="text" name="description" className="input" placeholder={annonces.description} onChange={this.handleChange} />

                    <label htmlFor="active" className="active"> Annonce active </label>
                    <select name="active" id="active" onChange={this.handleChange}>
                        <option value="true">active</option>
                        <option value="false">inactive</option>
                    </select>
                    <br />
                    <button className="btn">Modifier</button>

                    {/* <p>{user !== undefined ? user.first_name : ""} </p>
                    <p>{user !== undefined ? user.last_name : ""} </p> */}


                </form>
            </div>
        )
    }
}
