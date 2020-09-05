import React, { Component } from 'react';
import axios from 'axios'


export default class EditProfile extends Component {
 
    state = {
        first_name: "",
        last_name: '',
        email: '',
        adress: {},
        gender: '',
        age: '',
        Profile_type: '',
        password: '',
        description: ''
    }

    async componentDidMount() {
        await axios.get('http://localhost:5555/user/5f51fad06afc471198d19540')
            .then(response => {
                this.setState({
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    adress: response.data.adress,
                    gender: response.data.gender,
                    age: response.data.age,
                    Profile_type: response.data.Profile_type,
                    password: response.data.password,
                    description: response.data.description,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

componentDidUpdate = () => {
    console.log("component did update",this.state)
}

    onChangeFirstName = (e) => {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName = (e) => {
        this.setState({
            last_name: e.target.value
        });
    }
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }
    onChangeAdress = (e) => {
        this.setState({
            adress: e.target.value
        });
    }
    onChangeGender = (e) => {
        this.setState({
            gender: e.target.value
        });
    }
    onChangeAge = (e) => {
        this.setState({
            age: e.target.value
        });
    }
    onChangeProfilType = (e) => {
        this.setState({
            Profile_type: e.target.value
        });
    }
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

     onSubmit = async (e) => {
        e.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            address: this.state.address,
            gender: this.state.gender,
            age: this.state.age,
            Profile_type: this.state.Profile_type,
            password: this.state.password,
            description: this.state.description
        }
        console.log('user => ', user)
        await axios.patch('http://localhost:5555/user/5f51fad06afc471198d19540' , {user})
            .then(res => {
                console.log('res => ', res.data)
                this.setState({
                    first_name: res.data.first_name,
                })
                console.log("this.state.first_name",this.state.first_name)
            })
            .catch ((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="edit-profile">
                <h1>EditProfile</h1>

                <form onSubmit={this.onSubmit}>

                    <br />
                    <label htmlFor="first_name" className="label">Prénom : </label>
                    <input id="first_name" name="first_name" type="text" className="input" placeholder={this.state.first_name} onChange={this.onChangeFirstName} />

                    <br />
                    <label htmlFor="email" className="label">Adresse Mail : </label>
                    <input id="email" name="email" type="email" className="input" placeholder={this.state.email}
                        onChange={this.onChangeEmail} />

                    <br />
                    <label htmlFor="last_name" className="label">Nom de famille : </label>
                    <input id="last_name" name="last_name" type="text" className="input" placeholder={this.state.last_name}
                        onChange={this.onChangeLastName} />

                    <br />
                    <label htmlFor="age" className="label">Age : </label>
                    <input id="age" name="age" type="number" className="input" placeholder={this.state.age}
                        onChange={this.onChangeAge} />

                    <br />
                    <label htmlFor="description" className="label">Votre Description : </label>
                    <input id="description" name="description" type="text" className="input" placeholder={this.state.description}
                        onChange={this.onChangeDescription}
                    />


                    <br />
                    <h3>Adresse : </h3> <h5>(réservé aux Aulnaysiens)</h5>
                    <label htmlFor="adress-street" className="label">Rue : </label>
                    <input id="adress-street" name="adress_street" type="text" className="input" placeholder={this.state.adress.street}
                        onChange={this.onChangeAdress} />

                    <br />
                    <label htmlFor="adress-number" className="label">Numéro : </label>
                    <input id="adress-number" name="adress_number" type="number" className="input" placeholder={this.state.adress.street_number} onChange={this.onChangeAdress} />

                    <br />
                    <label htmlFor="adress-area" className="label">Quartier :  </label>
                    <input id="adress-area" name="adress_area" type="text" className="input" placeholder={this.state.adress.district}
                        onChange={this.onChangeAdress} />

                    <label htmlFor="Profile_type" className="label"> Profil utilisateur actuel :   </label>
                    <select name="Profile_type" id="Profile_type" onChange={this.onChangeProfilType}>
                        <option value="">{this.state.Profile_type}</option>
                        <option value="association">Représentant d'une association</option>
                        <option value="user">Utilisateur régulier</option>
                    </select>
                    {/* <br />
                    <label htmlFor="Profile_type" className="label"> type :  </label>
                    <input id="Profile_type" name="Profile_type" type="text" className="input" placeholder={this.state.Profile_type} /> */}

                    <button className="btn">Modifier </button>






                </form>

            </div>
        )
    }
}
