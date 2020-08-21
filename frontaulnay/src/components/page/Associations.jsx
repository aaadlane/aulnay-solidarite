import React, { Component } from 'react';
import AssociationCard from './../ComponentsCards/AssociationCard';
import axios from 'axios';

export default class Associations extends Component {
    state = {
        associations: []
    }
    async componentDidMount() {
        const allAssociations = await axios.get("http://localhost:5555/associations")
        this.setState({ associations: allAssociations.data })
    }
    render() {
        const associations = this.state.associations;
        return (
            <div className="associations">
                {associations.map((association,i) =>{
                    return <AssociationCard association={association} key={i}/>
                })}
            </div>
        )
    }
}
