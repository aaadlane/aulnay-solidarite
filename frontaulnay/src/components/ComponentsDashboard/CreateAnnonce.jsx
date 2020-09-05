import React, { Component } from 'react';
import axios from 'axios';


export default class CreateAnnonce extends Component {
    state = {
        categorie: []
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const createdAt = Date.now();
        console.log("createdat",createdAt);
        const active = this.state.active;
        console.log("active",active);
        const categorie = 
        // faire une condition si categorie name = celui de la value alors renvoie categorie.id

        axios.post("http://localhost:5555/annonce", { title, description, createdAt,active ,categorie});
        
    };
    connect () {
        const connard = "iduhgaugduyégfdyeégfigeuzf"
        localStorage.setItem('myData', connard);
    }
    deconnect () {
        localStorage.removeItem('myData');
    }

    async componentDidMount() {
        const categories = await axios.get("http://localhost:5555/categories")
        this.setState({ categorie: categories.data })
        const user = await axios.get("http://localhost:5555/user/5f51fad06afc471198d19540")
        this.setState({ users: user.data })
    }
    render() {
        const categorie = this.state.categorie
        // console.log("@@@@@@@", categorie)
        const user = this.state.users
        if (user !== undefined) {
        // console.log("&&&&&&&&", user.age)

        }

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
             

                    <label htmlFor="category-name" className="label"> Catégorie : </label>
                    <select name="category-name" id="category-name">
                        {categorie.map((categ, i) => {
                            return <option value={categ.category_name} key={i}> {categ.category_name} </option>
                        })}
                    </select>
                    <br/>
                    <label htmlFor="active" className="active"> Annonce active </label>
                    <select name="active" id="active">
                        <option value="true">active</option>
                        <option value="false">inactive</option>
                    </select>
                    <br/>
                    <button className="btn">create !!!</button>

                    <p>{user !== undefined ? user.first_name : ""} </p>
                    <p>{user !== undefined ? user.last_name : ""} </p>
                    <p>{user !== undefined ? user.last_name : ""} </p>
                    {/* <p>{user !== undefined ?  : ""} </p> */}

                    <button onClick={this.connect}>login </button>
                    <button onClick={this.deconnect}>lougout </button>

                </form>
            </div>
        )
    }
}






// //nom utilisateur
// date//
// image