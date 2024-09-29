import React from 'react';
import './Landingpage.css';

import image1 from '../components/assets/img1.png';
import image2 from '../components/assets/img2.png';
import image3 from '../components/assets/img3.png';

const Landingpage = () => {
  return (
    <div className="carousel-container">
      <input type="radio" name="slider" id="radio1" defaultChecked />
      <input type="radio" name="slider" id="radio2" />
      <input type="radio" name="slider" id="radio3" />

      <div className="carousel">
        <div className="slide slide1">
          <img src={image1} alt="Image 1" />
          <h1>Weather App</h1>
          <p>Weather app that works by fetching real-time data from OpenWeatherMap API.</p>
        </div>
        <div className="slide slide2">
          <img src={image2} alt="Image 2" />
          <h1>AI Chatbot Web Application</h1>
          <p>Interactive chatbot using React and the ChatGPT API that mimics real conversations.</p>
        </div>
        <div className="slide slide3">
          <img src={image3} alt="Image 3" />
          <h1>Quote Generator Web Application</h1>
          <p>React app that pulls in quotes from a public API.</p>
        </div>
      </div>

      <div className="carousel-nav">
        <label htmlFor="radio1"></label>
        <label htmlFor="radio2"></label>
        <label htmlFor="radio3"></label>
      </div>
    </div>
  );
};

export default Landingpage;
