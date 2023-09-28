import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return <nav>
        <ul>
            <li>Nuestros Productos</li>
            <li>Ofertas</li>
            <li>Contacto</li>
            <li>About</li>
            <li><CartWidget /> </li>
        </ul>
    </nav>
};

export default NavBar;