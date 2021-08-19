import React from "react";
import img1 from './img/slider/foto1.jpg';
import img2 from './img/slider/foto2.jpg';
import img3 from './img/slider/foto3.jpg';
import img4 from './img/slider/foto4.jpg';
import img5 from './img/slider/foto5.jpg';
import img6 from './img/slider/foto6.jpg';
import img7 from './img/slider/foto7.jpg';
import img8 from './img/slider/foto8.jpg';
import img9 from './img/slider/foto9.jpg';
import img10 from './img/slider/foto10.jpg';
import img11 from './img/slider/foto11.jpg';
import img12 from './img/slider/foto12.jpg';
import img13 from './img/slider/foto13.jpg';
import img14 from './img/slider/foto14.jpg';
import img15 from './img/slider/foto15.jpg';


export const SimpleSlider = () =>{

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  
  return (
    
     <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-indicators">

        {
          images.map((img, index) => {
            return (
              <button 
                key={index} 
                type="button" 
                data-bs-target="#carouselExampleIndicators" 
                data-bs-slide-to={`${index}`}
                className={`${(index === 0) ? 'active' : ''}`}
                aria-current={`${(index === 0) ? 'true' : ''}`}
                aria-label={`Slide ${index+1}`}></button>
            )
          })
        }

      </div>
      <div className="carousel-inner">

        {
          images.map((img, index) => {
            return (
              <div  key={index} className={`carousel-item ${(img === img1) ? 'active' : ''}`} >
                <img src={img} className="d-block w-100" alt="..."/>
              </div>
            )
          })
        }

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
  );
}