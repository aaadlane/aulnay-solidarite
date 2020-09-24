import React, { useContext } from "react";
import AuthContext from "./../auth/AuthContext";
import UserInfos from './../page/UserInfos'
import { Link } from "react-router-dom";


export default function Dashboard() {
  const AuthContextValue = useContext(AuthContext);
  // console.log("AuthContextValue ? >>> ", AuthContextValue);

  return (
    Boolean(AuthContextValue.currentUser) && (
      <div className="dashboard">
        <h1 className="dash-title">Mon espace personnel</h1>
       <div className="dash-yellow">
       <p className="dash-welcome">Bienvenue {AuthContextValue.currentUser.first_name} !</p>
        <UserInfos context={AuthContextValue} />
        <div className="dash-links">
          <Link to="/messagerie">messagerie</Link>
          <Link to="/manageannounce">manager annonce</Link>
        </div>
        {Boolean(AuthContextValue.currentUser.role === "admin") && (
          <div>

            <Link to="/dashboardadmin">Dashboard Admin</Link>
          </div>
        )}
       </div>
      </div>
    )
  );
}

