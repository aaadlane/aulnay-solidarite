import React, { useContext } from "react";
import AuthContext from "./../auth/AuthContext";
import UserInfos from './../page/UserInfos'
import { Link } from "react-router-dom";


export default function Dashboard() {
  const AuthContextValue = useContext(AuthContext);
  console.log("AuthContextValue ? >>> ", AuthContextValue);

  return (
    Boolean(AuthContextValue.currentUser) && (
      <div className="dashboard">
        <h1 className="title">Dashboard</h1>
        <p>Welcome {AuthContextValue.currentUser.first_name} !</p>
        <hr />
        <UserInfos context={AuthContextValue} />
        {Boolean(AuthContextValue.currentUser.role === "admin") && (
          <div>
              <Link to="/messagerie">messagerie</Link><br />
                <Link to="/manageannounce">manager annonce</Link><br />
                <Link to="/editprofile">modifier ses données/profil</Link><br />
                <Link to="/dashboardadmin">Dashboard Admin</Link> 
          </div>
        )}
      </div>
    )
  );
}

{/* <Link to="/messagerie">messagerie</Link><br />
                <Link to="/manageannounce">manager annonce</Link><br />
                <Link to="/editprofile">modifier ses données/profil</Link><br />
                <Link to="/createannonce">créer annonce</Link><br />
                <Link to="/dashboardadmin">Dashboard Admin</Link> */}