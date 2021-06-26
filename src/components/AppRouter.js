import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import { Inicio } from './Inicio';
import { Equipamiento } from './Equipamiento';
import { Artistas } from './Artistas';
import { Fotos } from './Fotos';
import { Contacto } from './Contacto';
import { NavBar } from './navbar/NavBar';

const AppRouter = () => {
    return ( 
        <Router>
            <div>
                
                <div className="container">
                    
                    <NavBar />
                    
                    <Switch>
                        <Route exact path="/" component={ Inicio } />

                        <Route exact path="/Equipamiento" component={ Equipamiento } />
                        <Route exact path="/Artistas" component={ Artistas } />
                        <Route exact path="/Fotos" component={ Fotos } />
                        <Route exact path="/Contacto" component={ Contacto } />

                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;