import React from "react"
import { useState } from "react";
import "../../styles/navbar.scss";

function NavBar(){
    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return(
        <nav className={`nav_bar ${showLinks ? "show_nav" : "hide-nav"}`}>
        <div className="nav_logo"><img className="logo" src="../../images/logo.png" alt="logo"/></div>
         <ul className= "nav_links" >
            <li className="nav_item">
                <a href="#apropos" className="nav_link">
                    A propos
                </a>
            </li>
            <li className="nav_item">
                <a href="#competence" className="nav_link">
                    Compétences
                </a>
            </li>
            <li className="nav_item">
                <a href="#projets" className="nav_link">
                    Mes projets
                </a>
            </li>
            <li className="nav_item">
                <a href="#contacte" className="nav_link">
                    Me contacter
                </a>
            </li>
        </ul>
        <button className="nav_burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
            

        </button>






        </nav>
    )
}
export default NavBar;