import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
const annonceHandler = new APIHandler("/annonce");


export default class AnnonceAdmin extends Component {

    state = { annonces : [] }

    async componentDidMount() {
        const apiRes = await annonceHandler.getAll();
        this.setState({ annonces : apiRes.data });
      }
      handleDelete = async (id) => {
      await annonceHandler.deleteOne(id);
        const apiRes2 = await annonceHandler.getAll();
        console.log(apiRes2);
        this.setState({ categs: apiRes2.data });
        // window.alert("are you sure")
    }

    render() {
        const annonces = this.state.annonces;

        return (
            <div className="annonce-admin">
                <h1>Annonces Admin</h1>

                <table className="product-manage-table">
                    <thead>
                        <tr className="table-row">
                            <th className="table-head">User</th>
                            <th className="table-head">categorie</th>
                            <th className="table-head">title</th>
                            <th className="table-head">Edit</th>
                            <th className="table-head">Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {annonces.map((ann, i) => {
                            return <tr key={i} className="table-row">
                                <td className="table-div" > {ann.id_user.first_name} </td>
                                <td className="table-div"> {ann.id_category.category_name} </td>
                                <td className="table-div"> {ann.title}  </td>
                                <td className="table-div"> <button className="button muted-button">Edit</button> </td>
                                <td className="table-div"> <button className="button muted-button"
                                onClick={() => this.handleDelete(ann._id)}
                                >Delete</button> </td>

                            </tr>
                        })}


                    </tbody>
                </table>


            </div>
        )
    }
}
