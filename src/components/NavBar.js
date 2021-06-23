import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

export const NavBar = () => {
    return (
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     <Navbar.Collapse id="responsive-navbar-nav">
        //         <Nav className="mr-auto">
        //         <Nav.Link href="./">Inicio</Nav.Link>
        //         <Nav.Link href="/Equipamiento">Equipamiento</Nav.Link>
        //         <Nav.Link href="#pricing">Pricing</Nav.Link>
        //         <Nav.Link href="#pricing">Pricing</Nav.Link>
        //         <Nav.Link href="#pricing">Pricing</Nav.Link>
                
        //         </Nav>
                
        //     </Navbar.Collapse>
        // </Navbar>
        
        <nav  className="navbar navbar-expand-lg navbar-light bg-light ">
            {/* <a className="navbar-brand" >LOGO</a> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/"
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/Equipamiento"
                        >
                            Equipamiento
                        </NavLink>                
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/Artistas"
                        >
                            Artistas
                        </NavLink>                
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/Imagenes"
                        >
                            Imágenes
                        </NavLink>                
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/Contacto"
                        >
                            Contacto
                        </NavLink>                
                    </li>
                </ul>
            </div>
        </nav>

       
      
    )
}
