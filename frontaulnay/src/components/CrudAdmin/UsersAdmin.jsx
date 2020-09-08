import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
const productHandler = new APIHandler("/user");


export default class UsersAdmin extends Component {
    state = { users: [] }

    // async componentDidMount() {
    //     const allUsers = await axios.get("http://localhost:5555/user")
    //     this.setState({ users: allUsers.data })
    // }
    async componentDidMount() {
        const apiRes = await productHandler.getAll();
        this.setState({ users : apiRes.data });
      }

    render() {
        const users = this.state.users;
        // if (user !== undefined) console.log("user", user )

        return (
            <div className="users-admin">
                <h1>Users Admin</h1>
                {/* { this.state[0].first_name  !== undefined ? this.state[0].first_name : ""} */}
                <table className="product-manage-table">
                    <thead>
                        <tr className="table-row">
                            <th className="table-head">Name</th>
                            <th className="table-head">Username</th>
                            <th className="table-head">email</th>
                            <th className="table-head">profil type</th>
                            <th className="table-head">Edit</th>
                            <th className="table-head">Delete </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => {
                            return <tr key={i} className="table-row">
                                <td className="table-div" > {user.first_name}  </td>
                                <td className="table-div"> {user.last_name}  </td>
                                <td className="table-div"> {user.email}  </td>
                                <td className="table-div"> {user.Profile_type}  </td>
                                <td className="table-div"> <button className="button muted-button">Edit</button> </td>
                                <td className="table-div"> <button className="button muted-button">Delete</button> </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
