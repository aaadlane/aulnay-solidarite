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
            <div className="annonce">
                <Link to="/createannonce">
                    <h2>créer une annonce</h2>
                </Link>
                {annonces.map((annonce, i) => {
                    return <AnnonceCard annonce={annonce} key={i} />
                })}
            </div>
        )
    }
}
