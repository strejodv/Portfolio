import React from 'react';
import './Landingpage.css';

import image1 from '../Components/assets/img1.png';
import image2 from '../Components/assets/img2.png';
import image3 from '../Components/assets/img3.png';

const Landingpage = () => {
  return (
    <div className="image-container">
      <div className="image-box">
        <a href="https://weather-app-five-omega-60.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={image1} alt="Weather App" />
          <h2>Weather App</h2>
          <p>Weather app that works by fetching real-time data from OpenWeatherMap API.</p>
        </a>
      </div>

      <div className="image-box">
        <a href="https://ai-chatbot-jet-two.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={image3} alt="AI Chatbot" />
          <h2>AI Chatbot Web Application</h2>
          <p>Interactive chatbot using React and the ChatGPT API that mimics real conversations.</p>
        </a>
      </div>

      <div className="image-box">
        <a href="https://quote-app-mocha.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={image2} alt="Quote Generator" />
          <h2>Quote Generator Web Application</h2>
          <p>React app that pulls in quotes from a public API.</p>
        </a>
      </div>
    </div>
  );
};

export default Landingpage;
