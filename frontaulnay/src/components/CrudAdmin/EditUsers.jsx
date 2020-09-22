import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
const userHandler = new APIHandler("/user");


export default class EditUsers extends Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        // console.log(this.props.match.params.id);
        const apiRes = await userHandler.getById(this.props.match.params.id);
        console.log(apiRes);
        this.setState(apiRes.data);
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    handleSubmit = async (evt) => {
        evt.preventDefault();
        const apiRes = await userHandler.updateOne(this.state._id, this.state)
        console.log(apiRes);
        console.log(this.state._id);
    };

    render() {

        const user = this.state
        console.log(user)

        return (
            <div className="edit-users">
                <h1>Modifier user</h1>
                <form onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                >
                    <h3>Nom de l'user : {user.first_name} {user.last_name} </h3>
                    <input
                        className="input"
                        type="text"
                        name="first_name"
                        defaultValue={user.first_name}
                    />
                    <input
                        className="input"
                        type="text"
                        name="last_name"
                        defaultValue={user.last_name}
                    />
                    <input
                        className="input"
                        type="text"
                        name="email"
                        defaultValue={user.email}
                    />
                    <button className="btn">update infos</button>

                </form>



            </div>
        )
    }
}
