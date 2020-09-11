import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { NavLink } from "react-router-dom";


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">    <img src="https://res.cloudinary.com/dpdlhag1u/image/upload/v1597752904/logo-appiwedia-white_dg38qn.png" alt="logosite" className="logo-header" /></NavLink>

      <Burger />
    </Nav>
  )
}

export default Navbar