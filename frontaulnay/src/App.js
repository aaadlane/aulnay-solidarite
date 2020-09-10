import React from 'react';
import "./styles/App.css";
import HeaderMain from "./components/Layout/HeaderMain";
import FooterMain from "./components/Layout/FooterMain";
import { Switch, Route } from "react-router-dom";

//pages
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Annonce from "./components/page/Annonce";
import NotFound from "./components/page/NotFound";
// import Associations from "./components/page/Associations";
import Dashboard from "./components/page/Dashboard";
import Messagerie from "./components/ComponentsDashboard/Messagerie";
import DashBoardAdmin from "./components/ComponentsDashboard/DashBoardAdmin";
import CreateAnnonce from "./components/ComponentsDashboard/CreateAnnonce";
import EditProfile from "./components/ComponentsDashboard/EditProfile";
import ManageAnnounce from "./components/ComponentsDashboard/ManageAnnounce";
import SignUp from "./components/LoginPage/SignUp";
import LoginPageSignIn from "./components/LoginPage/LoginPageSignIn";
import AnnonceAdmin from "./components/CrudAdmin/AnnonceAdmin";
// import AssociationsAdmin from "./components/CrudAdmin/AssociationsAdmin";
import CategorieAdmin from "./components/CrudAdmin/CategorieAdmin";
import UsersAdmin from "./components/CrudAdmin/UsersAdmin";
import AddCateg from "./components/CrudAdmin/AddCateg";
import EditCategory from "./components/CrudAdmin/EditCategory";
import EditAnnonces from "./components/CrudAdmin/EditAnnonces";



function App() {
  return (
    <div className="App">
      <HeaderMain />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/annonces" component={Annonce} />
          {/* <Route path="/associations" component={Associations} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/messagerie" component={Messagerie} />
          <Route path="/editprofile" component={EditProfile} />
          <Route path="/manageannounce" component={ManageAnnounce} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LoginPageSignIn} />
          <Route path="/createannonce" component={CreateAnnonce} />
          <Route path="/dashboardadmin" component={DashBoardAdmin} />
          <Route path="/annonceadmin" component={AnnonceAdmin} />
          {/* <Route path="/associationadmin" component={AssociationsAdmin} /> */}
          <Route path="/categorieadmin" component={CategorieAdmin} />
          <Route path="/usersadmin" component={UsersAdmin} />
          <Route path="/addcateg" component={AddCateg} />
          <Route path="/editcateg/:id" component={EditCategory} />
          <Route path="/editannonce/:id" component={EditAnnonces} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
      <FooterMain />
    </div>
  );
}

export default App;
