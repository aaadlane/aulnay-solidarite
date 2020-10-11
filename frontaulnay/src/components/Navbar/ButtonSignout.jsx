import React, { useContext } from "react";
import AuthContext from "./../auth/AuthContext";

export default function ButtonSignout() {
  const AuthContextValue = useContext(AuthContext);

  const handleSignout = () => {
    AuthContextValue.signout();
    
  };

  return (
    <li onClick={handleSignout}>Se déconnecter</li>
  );
}
