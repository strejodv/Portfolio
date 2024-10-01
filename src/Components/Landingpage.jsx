import React from 'react';
import './Landingpage.css';

import image1 from '../Components/assets/img1.png';
import image2 from '../Components/assets/img2.png';
import image3 from '../Components/assets/img3.png';

const Landingpage = () => {
  return (
    <div className="carousel-container">
      <input type="radio" name="slider" id="radio1"  />
      <input type="radio" name="slider" id="radio2" defaultChecked />
      <input type="radio" name="slider" id="radio3" />
      <h1 className='work-title'>Dev Projects</h1>
      <div className="carousel">
        <div className="slide slide1">
          <a href="https://weather-app-five-omega-60.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={image1} alt="Image 1" />
          </a>
          <h1>Weather App</h1>
          <p>Weather app that works by fetching real-time data from OpenWeatherMap API.</p>
        </div>
        <div className="slide slide2">
          <a href="https://ai-chatbot-jet-two.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={image3} alt="Image 1" />
          </a>
          <h1>AI Chatbot Web Application</h1>
          <p>Interactive chatbot using React and the ChatGPT API that mimics real conversations.</p>
        </div>
        <div className="slide slide3">
          <a href="https://quote-app-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={image2} alt="Image 1" />
          </a>
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
