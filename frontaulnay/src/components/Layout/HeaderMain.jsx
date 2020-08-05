import React from 'react';
import LinkLogin from "./../LinkLogin";
import { Link } from "react-router-dom";



export default function HeaderMain() {
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
               <LinkLogin/>     
              </header>
        </div>
    )
}
