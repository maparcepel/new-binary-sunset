import React, { useEffect, useState } from 'react'



export const Inicio = () => {

    const [opacity, setOpacity] = useState('none');
    
    useEffect(() => {
        let mounted = true;

        
        setTimeout(() => {
            if(mounted){
                (opacity === '0')
                    ? setOpacity('1')
                    :setOpacity('0')
            }
        }, 2000);
        
        return () => mounted = false;  //Evita error: Can't perform a React state update on an unmounted component
      }, [opacity]);
    
    return (
        <div className="inicio-carousel mt-5">
            
            <img className="inicio-img1 img-fluid" src={ '/assets/img/index1.jpg' } alt="First slide"/>
            <img className="inicio-img2 img-fluid" style={{ opacity: opacity}} src={ '/assets/img/index2.jpg' } alt="Second slide"/>
                
            
        </div>
    )
}