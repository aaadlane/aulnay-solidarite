// import React, { Component } from 'react';
// // import { Link } from 'react-router-dom'
// import { APIHandler } from '../../api/handler';
// const userHandler = new APIHandler("/user");

// export default class EditProfile extends Component {

//     state = { users: {}}

//     // QUAND JE FERAIS LA CONNEXION METTRE UN FIND BY ID
//     async componentDidMount() {
//         const apiRes = await userHandler.getAll();
//         this.setState({ users: apiRes.data });
//     }
//     handleChange = (evt) => {
//         this.setState({ [evt.target.name]: evt.target.value });
//     };

//     handleSubmit = async (evt) => {
//         evt.preventDefault();
//         const apiRes = await userHandler.updateOne(this.state._id, this.state)
//         console.log(apiRes);
//         console.log(this.state._id);
//     };


//     render() {

//         const user = this.state.users;
//         console.log("user", user);

//         return (
//             <div className="edit-profile">
//                 <h1>EditProfile</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <br />
//                     <label htmlFor="first_name" className="label">Prénom : </label>
//                     <input id="first_name" name="first_name" type="text" className="input" onChange={this.handleChange} />

//                     <br />
//                     <label htmlFor="email" className="label">Adresse Mail : {user.email} </label>
//                     <input id="email" name="email" type="email" className="input"
//                         onChange={this.handleChange} />
//                     <br />
//                     <label htmlFor="last_name" className="label">Nom de famille : </label>
//                     <input id="last_name" name="last_name" type="text" className="input"
//                         onChange={this.handleChange} />
//                     <br />
//                     <label htmlFor="age" className="label">Age : </label>
//                     <input id="age" name="age" type="number" className="input" placeholder={user.age}
//                         onChange={this.handleChange} />
//                     <br />
//                     <label htmlFor="description" className="label">Votre Description : </label>
//                     <input id="description" name="description" type="text" className="input"
//                         onChange={this.handleChange}
//                     />
//                     <br />
//                     <h3>Adresse : </h3> <h5>(réservé aux Aulnaysiens)</h5>
//                     <label htmlFor="adress-street" className="label">Rue : </label>
//                     <input id="adress-street" name="adress_street" type="text" className="input"
//                         onChange={this.handleChange} />
//                     <br />
//                     <label htmlFor="adress-number" className="label">Numéro : </label>
//                     <input id="adress-number" name="adress_number" type="number" className="input" onChange={this.handleChange} />

//                     <br />
//                     <label htmlFor="adress-area" className="label">Quartier :  </label>
//                     <input id="adress-area" name="adress_area" type="text" className="input"
//                         onChange={this.handleChange} />

//                     <label htmlFor="Profile_type" className="label"> Profil utilisateur actuel :   </label>
//                     <select name="Profile_type" id="Profile_type" onChange={this.handleChange}>
//                         <option value="">{this.state.Profile_type}</option>
//                         <option value="association">Représentant d'une association</option>
//                         <option value="user">Utilisateur régulier</option>
//                     </select>
//                     <button className="btn">Modifier </button>
//                 </form>
//             </div>
//         )
//     }
// }
