import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
const categHandler = new APIHandler("/categories");



export default class EditCategory extends Component {
    state = {
        categ: []
    }
    async componentDidMount() {
        const apiRes = await categHandler.getById(this.props.match.params.id);
        this.setState(apiRes.data);
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        await categHandler.updateOne(this.state._id, this.state)
    };
    render() {
        const categ = this.state

        return (
            <div className="edit-categ">
                <h1>Modifier catégorie</h1>
               <div className="bloc-connect">
               <form className="form-create-product" onSubmit={this.handleSubmit}>
                    <br />
                    <label htmlFor="category_name" className="label">Nom de la catégorie : </label> <br/>
                    <input type="text" name="category_name" className="input-addcateg" onChange={this.handleChange} placeholder={categ.category_name}/>
                    <br />
                    <label htmlFor="picture" className="label">Choisir l'image de la catégorie :</label> <br/>
                    <input type="text" name="picture" className="input-addcateg" onChange={this.handleChange} placeholder="Insérez un lien de l'image représentant la catégorie" />
                    <br />
                    <button className="btn-editannonce">Modifier</button>
                </form>
               </div>
            </div>
        )
    }
}
