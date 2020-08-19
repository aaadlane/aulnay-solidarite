import React, { Component } from 'react';
import AssociationCard from './../ComponentsCards/AssociationCard';

export default class Associations extends Component {
    render() {
        return (
            <div className="associations">
                <AssociationCard/>
                <AssociationCard/>
                <AssociationCard/>
                <AssociationCard/>
            </div>
        )
    }
}
