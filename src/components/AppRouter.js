import React from 'react'
import {
    HashRouter as Router,
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
import { Footer } from './inicio/Footer';

const AppRouter = () => {
    return ( 
        <Router>
            <div className="d-flex flex-column justify-content-between border-5 main">
                <div>
                    <NavBar />
                        <Switch>
                            
                            <Route exact path="/" component={ Inicio } />

                            <Route exact path="/Equipamiento" component={ Equipamiento } />
                            <Route exact path="/Artistas" component={ Artistas } />
                            <Route exact path="/Fotos" component={ Fotos } />
                            <Route exact path="/Contacto" component={ Contacto } />
                            <Route path="/" component={ Inicio } />

                            <Redirect to="/" />

                        </Switch>
                </div>
                        
                <div>
                    <Footer />
                </div>
            </div>
            
                    
                
            
        </Router>
    )
}

export default AppRouter;