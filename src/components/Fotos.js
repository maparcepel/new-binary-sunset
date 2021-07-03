import React from 'react'
import fotos from './img/fotos.png';

export const Fotos = () => {
    return ( 
        <div className="container" id="fotos">
            
            <div className="row">
                <div className="col-12 ">
                    <img className="img-fluid" src={ fotos } alt="Equipamiento"/>
                </div>
            </div>
        </div>
    )
}