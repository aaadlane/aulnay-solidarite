import React, { Component } from 'react';
import AuthContext from "./../auth/AuthContext";
import axios from "axios";
import AnnonceCard from "./../ComponentsCards/AnnonceCard"
import { Link } from 'react-router-dom';
import { APIHandler } from './../../api/handler';
const annonceHandler = new APIHandler("/annonce");



 
export default class ManageAnnounce extends Component {

    state = {
        categorie: [],
        annonces: [],
        annArray: [],
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    static contextType = AuthContext; 

    async componentDidMount() {
        const categories = await axios.get(process.env.REACT_APP_BACKEND_URL + '/categories')
        this.setState({ categorie: categories.data })
        const allAnnonces = await axios.get(process.env.REACT_APP_BACKEND_URL + '/annonce')
        this.setState({ annonces: allAnnonces.data })

        const idUserConnected = this.context.currentUser._id;

        // test avec map 
        const annoncemap = allAnnonces.data

        let annonceArray = []
        for (let i = 0; i < annoncemap.length; i++) {

            if (annoncemap[i].id_user._id === idUserConnected) {
                annonceArray.push(annoncemap[i])
            }
        }
        this.setState({ annArray: annonceArray })

    }
    handleDelete = async (id) => {
        await annonceHandler.deleteOne(id);
          const apiRes2 = await annonceHandler.getAll();
          this.setState({ anno : apiRes2.data });
          window.alert("êtes vous sur")
        }

    render() {
     
        const annoncesList = this.state.annArray;

        return (
            <div className="manage-announce">
                <h1> Mes annonce </h1>


                <article className="article-annonce">{annoncesList.map((ann, i) => {
                    return <div className="annonce-cardz">

                        <AnnonceCard annonce={ann} key={i} />
                        <button onClick={() => this.handleDelete(ann._id)} className="btn-dash">Supprimer</button>
                        <Link to={`/editannonce/${ann._id}`}><button className="btn-dash">Modifier </button></Link>

                    </div>
                })}

                </article>

            </div>
        )
    }
}
