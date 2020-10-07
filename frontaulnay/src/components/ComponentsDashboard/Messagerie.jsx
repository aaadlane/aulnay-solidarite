import React, { Component } from 'react';
import axios from 'axios';
import AuthContext from "./../auth/AuthContext";
import DisplayMessage from "./DisplayMessage"



export default class Messagerie extends Component {
    state = { messages: [] };
    static contextType = AuthContext;

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();

        const {
            message_content,
        } = this.state;

        await axios.post(process.env.REACT_APP_BACKEND_URL + '/messagerie', {
            writer: this.context.currentUser._id,
            reader: this.props.match.params.iduser,
            id_annonce: this.props.match.params.idannonce,
            message_content,
            date: Date.now(),
        });

    };


    async componentDidMount() {
        const messages = await axios.get(process.env.REACT_APP_BACKEND_URL + '/messagerie')
        this.setState({ messages: messages.data })
    }

    render() {
        const messages = this.state.messages
        return (
            <div className="messagerie">
                <h1>Messagerie</h1>
                <form className="form"
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}>
                    <label htmlFor="message_content" className="label">
                        saisir message
                        </label>
                    <input type="text" name="message_content" className="input" placeholder="Saisir votre message" />
                    <button className="btn">create !!!</button>
                </form>
                {messages.map((message, i) => {
                    return <DisplayMessage message={message} key={i} />
                })}
            </div>
        )
    }
}
