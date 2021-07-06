import React from 'react'
import equipamiento from './img/equipamiento.png';

export const Equipamiento = () => {
    return ( 
        
        <div className="container" id="equipamiento">
            
            <div className="row">
                <div className="col-12  section-title">
                    <img className="img-fluid" src={ equipamiento } alt="Equipamiento"/>
                </div>
            </div>
            <section className="ml-1 mb-5" id="contenido">
                <div className="row">
                    <div className="col-sm-12 col-md-6  mt-5">

                    <h5 className="orange">GRABACIÓN - MONITORAJE:</h5>
                    <ul >

                        <li>Pro Tools 11</li>
                        <li>Logic Pro X</li>
                        <li>Mac i7 4 ghz 32 gb ram</li>
                        <li>Mixer Fostex 450 16ch</li>
                        <li>Focusrite Liquid Saffire 56 </li>
                        <li>Altavocess Focal CMS 65, Yamaha HS50M, subgraves PreSonus Temblor T10</li>
                        <li>9 auriculares AKG, Audiotechnica, Sennheiser</li>
                        <li>KRK Ergo (analizador y corrector acústico)</li>
                        <li>Eco de cinta Roland Space Echo RE-201</li>
                     </ul>   
                        <h5 className="orange mt-5">MICROFONÍA:</h5>
                     <ul >
                        <li>Neumann tlm103</li>
                            <li>Cascade Knuckle Head</li>
                            <li>Sennheiser md 421 II </li>
                            <li>Sontronics Orpheus</li>
                            <li>Mxl R77</li>
                            <li>2 x Shure SM57</li>
                            <li>Audix D1</li>
                            <li>2 x Shure SM81</li>
                            <li>Audix ADX51</li>
                            <li>Akg  D112</li>
                            <li>Akg D3600</li>
                            <li>Beyerdynamic MC 930</li>
                            <li>Studio Projects B1</li>
                            <li>subkick DIY</li>
                    </ul>

                    </div>
                    
                    <div className="col-sm-12 col-md-6 mt-5">

                        <h5 className="orange">BACKLINE:</h5>
                        <ul >
                            <li>Batería Ludwig Super Classic (Chicago 1964)</li>
                            <li>Bombo 22”, tom 13”, Goliat 16” </li>
                            <li>Caja Pearl  Masters Studio 14x6.5”</li>
                            <li>Plats Zildjian Zht: Hi-Hat 14”, Fast Crash 17”, China 16”, Medium Ride 20”</li>
                            <li>Pantalla CMB (2 x 15", 100 w, 32 ohms)</li>
                            <li>Amplificador de teclat Hartke km200</li>
                        </ul>  
                        <h5 >SINTETIZADORES:</h5>
                        <ul >
                            <li>Arturia Matrixbrute</li>
                            <li>MFB Dominion X</li>
                            <li>Yamaha DX7s</li>
                            <li>Casio CZ101 </li>
                            <li>Moog Theremini</li>
                            <li>Moog Theremin Etherwave</li>
                         </ul >   
                         <h5>PEDALES:</h5>
                         <ul >
                            <li>EHX Stereo Memory Man</li>
                            <li>EHX Talking Machine</li>
                            <li>Effectivy Wonder Juno Chorus</li>
                            <li>Boss TU-3</li>
                            <li>Behringer Chorus Space-c</li>
                            <li>Mooer The Juicer</li>
                            <li>Mooer Ocen Machine</li>
                        </ul>
                    </div>

                </div>

                <div className="row">

                    <div className="row">


                </div>

                </div>
            </section>
        </div>
        
    )
}