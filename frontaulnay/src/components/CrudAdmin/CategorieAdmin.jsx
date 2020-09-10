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
                <table className="product-manage-table">
                    <thead>
                        <tr className="table-row">
                            <th className="table-head">Name</th>
                            <th className="table-head">Edit</th>
                            <th className="table-head">Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categ.map((cat, i) => {
                            return <tr key={i} className="table-row">
                                <td className="table-div" > {cat.category_name}  </td>
                                <td className="table-div"> <button className="button muted-button"><Link to={`/editcateg/${cat._id}`}>Edit</Link> </button> </td>
                                <td className="table-div"> <button className="button muted-button"

                                    onClick={() => this.handleDelete(cat._id)}

                                >Delete</button> </td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <button><Link to='/addcateg'>Ajouter une catégorie </Link></button>
            </div>
        )
    }
}
