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
        </div>
        <div className="slide">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="slide">
          <img src={image3} alt="Image 3" />
        </div>
      </div>
      <div class="carousel-nav">
        <label for="slide1"></label>
        <label for="slide2"></label>
        <label for="slide3"></label>
      </div>
    </div>
  );
}

export default Landingpage;