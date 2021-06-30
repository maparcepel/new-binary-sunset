import React from 'react'

export const InicioBottom = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                
                <div className="col inicio-text">
                    <p>Binary Sunset es un estudio de grabación ubicado en el corazón del Alt Penedés, rodeado de viñas, en un entorno rural ideal para desconectar y concentrarte en tu música.</p>
                    <p>Sala de grabación de 45 m2, control room de 13 m2 y sala de 4 m2 para amplis. A 5 minutos de Vilafranca del Penedès (Barcelona).</p>
                </div>   
                             
            </div>

            <div className="row mt-3 mb-3">
                <div className="col d-flex justify-content-center">
                    <img className="img-fluid" src={ '/assets/img/inicio-gruposBN.png' } alt="Kinky Coocoos"/>
                </div>
            </div>
        </div>
    )
}
