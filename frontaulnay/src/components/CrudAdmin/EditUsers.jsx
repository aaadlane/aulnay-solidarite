import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
const userHandler = new APIHandler("/user");


export default class EditUsers extends Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        const apiRes = await userHandler.getById(this.props.match.params.id);
        this.setState(apiRes.data);
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    handleSubmit = async (evt) => {
        evt.preventDefault();
        await userHandler.updateOne(this.state._id, this.state)
    };

    render() {

        const user = this.state

        return (
            <div className="edit-users">
                <h1>Modifier utilisateur</h1>
                <div className="bloc-connect">
                    <form onSubmit={this.handleSubmit}
                        onChange={this.handleChange}
                    >
                        <label className="label-addcateg">Prénom de l'utilisateur : </label>
                        <input
                            className="input-addcateg"
                            type="text"
                            name="first_name"
                            defaultValue={user.first_name}
                        /><br />
                        <label className="label-addcateg">Nom de l'utilisateur : </label>
                        <input
                            className="input-addcateg" type="text"
                            name="last_name"
                            defaultValue={user.last_name}
                        /><br />
                        <label className="label-addcateg">Mail de l'utilisateur : </label>
                        <br />
                        <input
                            className="input-addcateg" type="text"
                            name="email"
                            defaultValue={user.email}
                        /><br />
                        <button className="btn-editannonce">Modifier</button>

                    </form>
                </div>



            </div>
        )
    }
}
