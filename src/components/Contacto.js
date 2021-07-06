import React from 'react'
import { Link } from 'react-router-dom';
import contacto from './img/contacto.png';
import email from './img/email.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import youtube from './img/youtube.png';

export const Contacto = () => {
    return ( 
        <div className="container" id="contacto">
            
            <div className="row">
                <div className="col-12  section-title">
                    <img className="img-fluid" src={ contacto } alt="Equipamiento"/>
                </div>
            </div>

            <div className="row mt-5 pt-5">
                <div className="col text-center pb-5">
                    <Link to={{ pathname: "mailto:marcel@binarysunsetestudio.com" }} target="_blank">
                        <img src={ email } alt="marcel@binarysunsetestudio.com" />
                    </Link>
                </div>

                <div className="col text-center pb-5">
                    <Link to={{ pathname: "https://www.facebook.com/BinarySunsetEstudio" }} target="_blank">
                        <img src={ facebook } alt="Facebook" />
                    </Link>
                </div>

                <div className="col text-center pb-5">
                    <Link to={{ pathname: "https://www.instagram.com/binary_sunset_estudio/" }} target="_blank">
                        <img src={ instagram } alt="Instagram" />
                    </Link>
                </div>

                <div className="col text-center pb-5">
                    <Link to={{ pathname: "https://www.youtube.com/channel/UClAMODgaaVQ97AuounXEkww" }} target="_blank">
                        <img src={ youtube } alt="Youtube" />
                    </Link>
                </div>
                
            </div>
        </div>
    )
}