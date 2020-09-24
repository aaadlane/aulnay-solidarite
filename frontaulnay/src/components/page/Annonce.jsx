import React, { Component } from 'react';
import AnnonceCard from "./../ComponentsCards/AnnonceCard"
import axios from 'axios';
import { Link } from "react-router-dom";


export default class Annonce extends Component {

    state = {
        annonces: []
    }

    async componentDidMount() {
        const allAnnonces = await axios.get("http://localhost:5555/annonce")
        this.setState({ annonces: allAnnonces.data })
    }

    render() {
        const annonces = this.state.annonces;
        // console.log("@@@@@@@@", annonces)

        return (
           <div className="main-annonce">
               <h1 className="annonce-main-title">Les annonces</h1>
               <Link to="/createannonce">
                    <button className="create-annonce-btn"> Créer une annonce</button>
                </Link>
                <div className="annonce">
              
                {annonces.map((annonce, i) => {
                    return <AnnonceCard annonce={annonce} key={i} />
                })}
            </div>
           </div>
        )
    }
}
