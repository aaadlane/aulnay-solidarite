import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
import { Link } from 'react-router-dom';

const userHandler = new APIHandler("/user");


export default class UsersAdmin extends Component {
    state = { users: [] }

    async componentDidMount() {
        const apiRes = await userHandler.getAll();
        this.setState({ users: apiRes.data });
    }

    handleDelete = async (id) => {
        await userHandler.deleteOne(id);
        const apiRes2 = await userHandler.getAll();
        this.setState({ anno: apiRes2.data });
        window.alert("etes vous sur")
    }

    render() {
        const users = this.state.users;

        return (
            <div className="users-admin">
                <h1>Users Admin</h1>

                {users.map((user, i) => {
                    return <table className="product-manage-table">
                        <thead>
                            <tr className="table-row">
                                <th className="table-head">Prenom</th>
                                <th className="table-head">Nom</th>
                                <th className="table-head">E-mail</th>
                                <th className="table-head">Type de profil</th>
                                <th className="table-head">Modifier</th>
                                <th className="table-head">Supprimer </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={i} className="table-row">
                                <td className="table-div" > {user.first_name}  </td>
                                <td className="table-div"> {user.last_name}  </td>
                                <td className="table-div"> {user.email}  </td>
                                <td className="table-div"> {user.Profile_type}  </td>
                                <td className="table-div"> <Link to={`/edituser/${user._id}`}><button className="muted-button">Modifier</button></Link>  </td>
                                <td className="table-div"> <button className="muted-button" onClick={() => this.handleDelete(user._id)}>Supprimer</button> </td>
                            </tr>
                        </tbody>
                    </table>
                })}

            </div>
        )
    }
}
