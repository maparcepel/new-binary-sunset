import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={ '/assets/img/logo1.png' } alt="Binary Sunset" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div className="mb-3">
                <img src={ 'assets/img/menu-inicio.png' } alt="" />
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
                <img src={ 'assets/img/menu-equipamiento.png' } alt="" />
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
                <img src={ 'assets/img/menu-artistas.png' } alt="" />
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
                <img src={ 'assets/img/menu-fotos.png' } alt="" />
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
                <img src={ 'assets/img/menu-contacto.png' } alt="" />
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
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
        