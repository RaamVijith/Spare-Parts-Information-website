import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      showArrows={true}
    >
      <div className="slide">
         <img src="https://theme1117-turbojet.myshopify.com/cdn/shop/files/img_38_1728x.png?v=1660139319" alt="Slide 1" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
      <div className="slide">
        <img src="https://theme1117-turbojet.myshopify.com/cdn/shop/files/img_22_d28d04b2-6e3d-4bfe-9a55-52acc1f7e011_1728x.png?v=1660139848v" alt="Slide 2" />
        <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
      <div className="slide">
          <img src="https://theme1117-turbojet.myshopify.com/cdn/shop/files/img_37_1728x.png?v=1660047978" alt="Slide 3" />
         <div className="overlay">
          <h2>NEW ARRIVALS</h2>
          <h1>Auto parts at reasonable prices</h1>
          <p>With constant discounts</p>
          <a href="#collections">See All Collections</a>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
