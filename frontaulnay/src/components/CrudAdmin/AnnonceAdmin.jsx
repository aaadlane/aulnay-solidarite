import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { APIHandler } from './../../api/handler';
const annonceHandler = new APIHandler("/annonce");


export default class AnnonceAdmin extends Component {

    state = { annonces: [] }

    async componentDidMount() {
        const apiRes = await annonceHandler.getAll();
        this.setState({ annonces: apiRes.data });
    }
    handleDelete = async (id) => {
        await annonceHandler.deleteOne(id);
        const apiRes2 = await annonceHandler.getAll();
        this.setState({ anno: apiRes2.data });
        window.alert("etes vous sur")
    }

    render() {
        const annonces = this.state.annonces;

        return (
            <div className="annonce-admin">
                <h1>Annonces Admin</h1>


                {annonces.map((ann, i) => {
                    return <table className="product-manage-table">
                        <thead>
                            <tr className="table-row">
                                <th className="table-head">Utilisateur</th>
                                <th className="table-head">Categorie</th>
                                <th className="table-head">Titre</th>
                                <th className="table-head">Modifier</th>
                                <th className="table-head">Supprimer </th>
                            </tr>
                        </thead>
                        <tbody><tr key={i} className="table-row">
                            <td className="table-div" > {ann.id_user.first_name} </td>
                            <td className="table-div"> {ann.id_category.category_name} </td>
                            <td className="table-div"> {ann.title}  </td>
                            <td className="table-div">
                                <button className="button muted-button">
                                    <Link to={`/editannonce/${ann._id}`}>Modifier</Link>
                                </button> </td>
                            <td className="table-div"> <button className="button muted-button"
                                onClick={() => this.handleDelete(ann._id)}
                            >Supprimer</button> </td>

                        </tr>
                        </tbody>
                    </table>
                })}





            </div>
        )
    }
}
