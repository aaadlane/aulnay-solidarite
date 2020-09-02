import React, { Component } from 'react';
import axios from 'axios';


export default class Messagerie extends Component {
    state = { messages: [] };
    async componentDidMount() {
        const allMessages = await axios.get("http://localhost:5555/messagerie")
        this.setState({ messages: allMessages.data })
    };
    render() {


        const messages = this.state.messages;
        console.log("################################", this.state.messages)

        return (
            <div className="messagerie">
                <h1>Messagerie</h1>
                <label htmlFor="price" className="label">saisir message</label>
                <input type="text" />
                <textarea name="sd" cols="39" rows="10"></textarea>
                <table>
                    <tbody>
                        <tr>
                            <th> old message</th>
                            <th> old message</th>
                            <td>exemple message</td>
                            <td>exemple message</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
