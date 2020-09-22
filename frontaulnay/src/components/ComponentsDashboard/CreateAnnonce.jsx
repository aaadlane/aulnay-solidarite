import React, { Component } from 'react';
// import { apiHandler } from "./../../api/handler";
import AuthContext from "./../auth/AuthContext";
import axios from "axios";

// const handler = apiHandler();


export default class CreateAnnonce extends Component {
    state = {
        categorie: []
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    static contextType = AuthContext;


    handleSubmit = (evt) => {
        evt.preventDefault();

        // console.log("l'user connecté", this.context.currentUser)

        const id_user = this.context.currentUser._id
        console.log("id_user", id_user);

        let categArray = [];
        console.log("categ array ",categArray);
        const categorieMap = this.state.categorie;
        console.log("categorie map",categorieMap);
        const id_category = categArray;
        console.log("id category",id_category);
        for (let i = 0; i < categorieMap.length; i++) {
            console.log("boucle for categ", categorieMap[i])
            if (categorieMap[i] !== undefined) { categArray.push(categorieMap[i]._id) }
        }



        const title = this.state.title;
        const description = this.state.description;
        const createdAt = Date.now();
        // console.log("createdat", createdAt);
        const active = this.state.active;
        // console.log("active", active);
        // console.log("this.con)", this.context)

        // faire une condition si categorie name = celui de la value alors renvoie categorie.id

        axios.post("http://localhost:5555/annonce", { id_user, id_category, title, description, createdAt, active });
        this.props.history.push("/annonce");

    };


    async componentDidMount() {
        const categories = await axios.get("http://localhost:5555/categories")
        this.setState({ categorie: categories.data })
    }
    render() {
        // console.log("user connecté dans le render)", this.context.currentUser)

        const categorie = this.state.categorie
        console.log("@@@@@@@", categorie)
        // const user = this.context.currentUser
        // if (user !== undefined) {
        // console.log("&&&&&&&&", user.age)

        // }

        return (
            <div className="create-annonce">
                <h1>Créer une annonce </h1>
                <form className="form"
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>
                    <br />
                    <label htmlFor="title" className="label"></label>
                    <input type="text" name="title" className="input" placeholder="titre de l'annonce" />
                    <br />
                    <label htmlFor="description" className="label"></label>
                    <input type="text" name="description" className="input" placeholder="description de l'annonce" />
                    <br />


                    <label htmlFor="category_name" className="label"> Catégorie : </label>
                    <select name="category_name" id="category_name">
                        <option>choisir</option>
                        {categorie.map((categ, i) => {
                            return <option value={categ.category_name} key={i}> {categ.category_name} </option>
                        })}
                    </select>
                    <br />
                    <label htmlFor="active" className="active"> Annonce active </label>
                    <select name="active" id="active">
                        <option>Choisir</option>
                        <option value="true">active</option>
                        <option value="false">inactive</option>
                    </select>
                    <br />
                    <button className="btn">create !!!</button>


                </form>
            </div>
        )
    }
}






// //nom utilisateur
// date//
// image