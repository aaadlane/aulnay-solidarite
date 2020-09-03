import React, { Component } from 'react';
import AnnonceCard from "./../ComponentsCards/AnnonceCard"
import axios from 'axios';

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

        return (
            <div className="annonce">
                {annonces.map((annonce, i) => {
                    return <AnnonceCard annonce={annonce} key={i} />  })}
      
              
            </div>
        )
    }
}
