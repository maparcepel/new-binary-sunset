import React from 'react'
import fotos from './img/fotos.png';
import { SimpleSlider } from './Slider';

export const Fotos = () => {
    return ( 
        <div className="container pb-5" id="fotos">
            
            <div className="row">
                <div className="col-12 section-title">
                    <img className="img-fluid" src={ fotos } alt="Equipamiento"/>
                </div>
            </div>

            <div className="row">
                <SimpleSlider />

            </div>
            
        </div>
    )
}