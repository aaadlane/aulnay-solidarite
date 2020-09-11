import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "./../auth/AuthContext";

export default function ButtonSignout() {
  const AuthContextValue = useContext(AuthContext);

  const handleSignout = () => {
    AuthContextValue.signout();
  };

  return (
    <FontAwesomeIcon
      size="4x"
      className="is-clickable link icon signout"
      icon={faUserSlash}
      onClick={handleSignout}
    />
  );
}
