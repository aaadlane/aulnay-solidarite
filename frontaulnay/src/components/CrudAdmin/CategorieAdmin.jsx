import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { APIHandler } from './../../api/handler';
const categHandler = new APIHandler("/categories");


export default class CategorieAdmin extends Component {
    state = { categories: [] }


    async componentDidMount() {
        const apiRes = await categHandler.getAll();
        this.setState({ categories: apiRes.data });
    }

    handleDelete = async (id) => {
        await categHandler.deleteOne(id);
        const apiRes2 = await categHandler.getAll();
        this.setState({ categs: apiRes2.data });
        window.alert("are you sure")
    }

    render() {

        const categ = this.state.categories;
        return (
            <div className="categorie-admin">
                <h1>Categories Admin</h1>
                {/* { this.state[0].first_name  !== undefined ? this.state[0].first_name : ""} */}
                <div className="btn-manage">
                    <button className="create-annonce-btn"><Link to='/addcateg'>Ajouter une catégorie </Link></button>
                </div>
                {categ.map((cat, i) => {
                    return <table className="product-manage-table">
                        <thead>
                            <tr key={i} className="table-row">
                                <th className="table-head">Nom de la catégorie</th>
                                <th className="table-head">Modifier</th>
                                <th className="table-head">Supprimer </th>
                            </tr>
                        </thead>
                        <tbody><tr className="table-row">
                            <td className="table-div" > {cat.category_name}  </td>
                            <td className="table-div"> <button className="button muted-button"><Link to={`/editcateg/${cat._id}`}>Modifier</Link> </button> </td>
                            <td className="table-div"> <button className="button muted-button" onClick={() => this.handleDelete(cat._id)}>Supprimer</button> </td>
                        </tr>
                        </tbody>

                    </table>
                })}


            </div>
        )

    }
}
