import React from 'react'
import grupos from '../img/inicio-gruposBN.png';

export const InicioBottom = () => {
    return (
        <div className="container mt-5">
            <div className="row inicio-text">
                
                <div className="col-sm inicio-text-left">
                    <p className="inicio-right mb-0">Binary Sunset es un estudio de grabación ubicado en el corazón del Alt Penedés, rodeado de viñas, en un entorno rural ideal para desconectar y concentrarte en tu música.</p>
                </div>   
                <div className="col-sm">
                    <p className="inicio-justify">Sala de grabación de 45 m2, control room de 13 m2 y sala de 4 m2 para amplis. A 5 minutos de Vilafranca del Penedès (Barcelona).</p>
                </div>  
                             
            </div>

            <div className="row mt-5 pb-5">
                <div className="col d-flex justify-content-center">
                    <img className="img-fluid" src={ grupos } alt="Kinky Coocoos"/>
                </div>
            </div>
        </div>
    )
}
