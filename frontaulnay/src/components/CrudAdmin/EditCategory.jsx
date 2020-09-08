import React, { Component } from 'react';
import { APIHandler } from './../../api/handler';
const categHandler = new APIHandler("/categories");



export default class EditCategory extends Component {
    state = {
        categ: []
    }
    async componentDidMount() {
        // console.log(this.props.match.params.id);
        const apiRes = await categHandler.getById(this.props.match.params.id);
        // console.log(apiRes.data);
        this.setState(apiRes.data);
    }
    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        const apiRes = await categHandler.updateOne(this.state._id, this.state)
        console.log(apiRes);
        console.log(this.state._id);
    };
    render() {
        const categ = this.state
        // console.log(categ)

        return (
            <div className="edit-categ">
                <h1>Edit category</h1>
                <form className="form-create-product" onSubmit={this.handleSubmit}>
                    <br />
                    <label htmlFor="category_name" className="label"></label>
                    <input type="text" name="category_name" className="input" onChange={this.handleChange} placeholder={categ.category_name}/>
                    <br />
                    <label htmlFor="picture" className="label"></label>
                    <input type="text" name="picture" className="input" onChange={this.handleChange} placeholder="Insérez un lien de l'image représentant la catégorie" />
                    <br />
                    <button className="btn">create !!!</button>
                </form>
            </div>
        )
    }
}
