import React, { Component } from 'react';
import axios from 'axios';


export default class CreateAnnonce extends Component {
    state = {
        categorie: []
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const date = Date.now();

        await axios.post("http://localhost:5555/annonce", { title, description, createdAt: date});
    };

    async componentDidMount() {
        const categories = await axios.get("http://localhost:5555/categories")
        this.setState({ categorie: categories.data })
    }
    render() {
        const categorie = this.state.categorie
     
        return (
            <div className="create-annonce">
                <h1>Créer une annonce </h1>
                <form className="form"
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>
                    <br />
                    <label htmlFor="title" className="label"></label>
                    <input type="text" name="title" type="text" className="input" placeholder="titre de l'annonce" />
                    <br />
                    <label htmlFor="description" className="label"></label>
                    <input type="text" name="description" type="text" className="input" placeholder="description de l'annonce" />
                    <button className="btn">create !!!</button>
                    <br />
                    <label htmlFor="category-name" className="label"> Catégorie : </label>
                    <select name="category-name" id="category-name">
                        {categorie.map((categ, i) => {
                            return <option value={categ.category_name} key={i}> {categ.category_name} </option>
                        })}
                    </select>

                </form>
            </div>
        )
    }
}
