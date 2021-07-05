import React from "react";
import Slider from "react-slick";
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed: 3000,
    centerMode: true,
    touchMove: true
  };
  return (
    <Slider {...settings} className="mt-5 pt-5">
      <div className="">
        <img className="img-fluid fotos-margin" src={img1} alt="Binary Sunset" />
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img2} alt="Binary Sunset" />
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img3} alt="Binary Sunset" />      
        </div>
      <div>
        <img className="img-fluid fotos-margin" src={img4} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img5} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img6} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img7} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img8} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img9} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img10} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img11} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img12} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img13} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img14} alt="Binary Sunset" />      
      </div>
      <div>
        <img className="img-fluid fotos-margin" src={img15} alt="Binary Sunset" />      
      </div>
    </Slider>
  );
}