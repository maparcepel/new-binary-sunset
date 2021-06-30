import React, { useEffect, useState } from 'react'


export const InicioTop = () => {
    const [opacity, setOpacity] = useState('none');
    
    useEffect(() => {
        let mounted = true;

        
        setTimeout(() => {
            if(mounted){
                (opacity === '0')
                    ? setOpacity('1')
                    :setOpacity('0')
            }
        }, 5000);
        
        return () => mounted = false;  //Evita error: Can't perform a React state update on an unmounted component
    }, [opacity]);
    
    return (
        
        <div className="container-fluid p-0">
            <div className="row inicio-carousel">
            
                <img className="img-fluid m-0 p-0" src={ '/assets/img/index1.jpg' } alt="First slide"/>
                <img className="inicio-img2 img-fluid m-0 p-0" style={{ opacity: opacity}} src={ '/assets/img/index2.jpg' } alt="Second slide"/>
            
            </div>
            
        </div>
    )
}
