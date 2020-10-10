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
        console.log("get annonce", allAnnonces);
        console.log("get annonce data ", allAnnonces.data);

        console.log("this context", this.context);
        const idUserConnected = this.context.currentUser._id;
        console.log("ID de l'user connecté dans le contexte", idUserConnected);

        // test avec map 
        const annoncemap = allAnnonces.data
        console.log("Map sur annonce", annoncemap);

        let annonceArray = []
        for (let i = 0; i < annoncemap.length; i++) {
            console.log("annonce map user id", annoncemap[i].id_user._id)

            if (annoncemap[i].id_user._id === idUserConnected) {
                console.log(annoncemap[i])
                annonceArray.push(annoncemap[i])
            }
        }
        this.setState({ annArray: annonceArray })
        console.log('annonceArray------', annonceArray)

        const annoncemapdata = annoncemap[0]._id;
        console.log("ya quoi dans la data", annoncemapdata);

        // test avec filter
        // function annonces(obj) {
        //     if (obj._id !== undefined) { return obj._id }
        // };
        // var annonceID = allAnnonces.data.filter(annonces);
        // console.log("annonceid", annonceID);
    }
    handleDelete = async (id) => {
        await annonceHandler.deleteOne(id);
          const apiRes2 = await annonceHandler.getAll();
          // console.log(apiRes2);
          this.setState({ anno : apiRes2.data });
          // window.alert("are you sure")
      }

    render() {
        const annonces = this.state.annonces;
        console.log("annonces", annonces);

        const annoncesList = this.state.annArray;
        console.log("array dans le render", annoncesList);

        // const categorie = this.state.categorie
        // console.log("@@@@@@@", categorie)

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
