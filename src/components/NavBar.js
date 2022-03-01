import React from "react";

export default function NavBar(){
    return(
        <nav className="navBar">   
        <ul className="main-nav__items">
            <ul className="main-nav__item">
              <a href='#'> GitHub</a> 
            </ul>
            <ul className="main-nav__item">
                <a href='#'>LinkedIn</a>   
            </ul>
            <ul className="main-nav__item">
                <a href='#'>Projects</a>   
            </ul>
            <ul className="main-nav__item">
            <a href='#'>Spotify</a>   
            </ul>
        </ul>
    </nav>
    );
}