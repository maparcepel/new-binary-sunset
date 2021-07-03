import React from 'react'
import artistas from './img/artistas.png';

export const Artistas = () => {
    return ( 
        <div className="container" id="artistas">
            
            <div className="row">
                <div className="col-12 ">
                    <img className="img-fluid" src={ artistas } alt="Equipamiento"/>
                </div>
            </div>
        </div>
    )
}