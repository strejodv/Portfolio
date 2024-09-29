import React from 'react';
import './Landingpage.css';

import image1 from '../components/assets/img1.png';
import image2 from '../components/assets/img2.png';
import image3 from '../components/assets/img3.png';

const Landingpage = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="slide">
          <img src={image1} alt="Image 1" />
          <h1>Weather App</h1>
          <p>Weather app the works by fetching real-time data from OpenWeatherMap API</p>
        </div>
        <div className="slide">
          <img src={image2} alt="Image 2" />
          <h2>Image 2 Header</h2>
          <p>This is a description for Image 2.</p>
        </div>
        <div className="slide">
          <img src={image3} alt="Image 3" />
          <h2>Image 3 Header</h2>
          <p>This is a description for Image 3.</p>
        </div>
    </div>
      <div className="carousel-nav">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
      </div>
  </div>
  );
}

export default Landingpage;