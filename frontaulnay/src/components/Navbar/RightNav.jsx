import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import ButtonSignout from "./ButtonSignout"
import AuthContext from "./../auth/AuthContext"

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 800px) {   
    flex-flow: column nowrap;
    background-color: #32b6c8;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    border-left: 1px solid var(--graycolor);
    width: 60vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    text-decoration:none;
    li {
      color: #ff0052;
    }
  }
`;


const RightNav = ({ open }) => {
  const AuthContextValue = useContext(AuthContext);

  return (

    <Ul open={open}>
      <NavLink to="/"><li>Accueil</li></NavLink>
      <NavLink to="/about"><li>About</li></NavLink>
      <NavLink to="/contact"><li>Contact</li></NavLink>
      <NavLink to="/annonces"><li>Annonces</li></NavLink>
      <NavLink to="/associations"><li>Associations</li></NavLink>
      {AuthContextValue.isSignedIn && (
        <>

          <NavLink to="/dashboard"><li>Dashboard</li></NavLink>
          <ButtonSignout />
        </>
      )}
      {AuthContextValue.isSignout && (
        <>

          <NavLink to="/signin"> <li>Se Connecter</li></NavLink>
        </>
      )}


    </Ul>
  )
}

export default RightNav