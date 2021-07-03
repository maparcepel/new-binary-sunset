import React from 'react'
import contacto from './img/contacto.png';

export const Contacto = () => {
    return ( 
<div className="container" id="contacto">
            
            <div className="row">
                <div className="col-12 ">
                    <img className="img-fluid" src={ contacto } alt="Equipamiento"/>
                </div>
            </div>
        </div>
    )
}