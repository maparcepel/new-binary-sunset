import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from '../img/logo1.png';
import inicio from '../img/menu-inicio.png';
import equipamiento from '../img/menu-equipamiento.png';
import artistas from '../img/menu-artistas.png';
import fotos from '../img/menu-fotos.png';
import contacto from '../img/menu-contacto.png';


export function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    
      <nav className="container navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={ logo } alt="Binary Sunset" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div className="mb-3">
                <img src={ inicio } alt="" />
              </div>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                INICIO
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="mb-3">
                <img src={ equipamiento } alt="" />
              </div>
              <NavLink
                exact
                to="/Equipamiento"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                EQUIPAMIENTO
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="mb-3">
                <img src={ artistas } alt="" />
              </div>
              <NavLink
                exact
                to="/Artistas"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ARTISTAS
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="mb-3">
                <img src={ fotos } alt="" />
              </div>
              <NavLink
                exact
                to="/Fotos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                FOTOS
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="mb-3">
                <img src={ contacto } alt="" />
              </div>
              <NavLink
                exact
                to="/Contacto"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                CONTACTO
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    
  );
}

export default NavBar;
        