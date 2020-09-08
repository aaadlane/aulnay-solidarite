import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
const apiHandler = new APIHandler("/categories");


export default class AddCateg extends Component {
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    
    handleSubmit = async (evt) => {
        evt.preventDefault();
        const apiRes = await apiHandler.createOne(this.state);
        console.log(apiRes);
    };

    render() {
        return (
            <div className="add-categ">
                <h1> create category</h1>

                <form
                    className="form-create-product"
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                >
                    <br />
                    <label htmlFor="category_name" className="label"></label>
                    <input type="text" name="category_name" className="input" placeholder="Nom de la catégorie" />
                    <br />
                    <label htmlFor="picture" className="label"></label>
                    <input type="text" name="picture" className="input" placeholder="Insérez un lien de l'image représentant la catégorie" />
                    <br/>
                    <button className="btn">create !!!</button>
                </form>
            </div>
        )
    }
}
