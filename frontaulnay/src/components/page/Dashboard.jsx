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

        </div>
        <div className="dash-links">
          <Link to="/messagerie/:iduser/:idannonce">Ma Messagerie</Link>
          <hr/>
          <Link to="/manageannounce">Manager mes annonce</Link>

          {Boolean(AuthContextValue.currentUser.role === "admin") && (
            <div> 
              <hr/>

              <Link to="/dashboardadmin">Dashboard réservé à l'admin</Link>
            </div>
          )}
        </div>
      </div>
    )
  );
}

