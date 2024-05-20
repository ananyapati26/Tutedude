import React from 'react';
import '../styles/Carousel.css';
import { logos } from '../lib/data/logos';

const Carousel = () => {
  // Duplicate logos to create the continuous effect
  const continuousLogos = [...logos, ...logos];

  return (
    <div className='car-body'>
      <h1>Top Companies Hiring <span className='new'>Data Scientist</span></h1>
      <div className='marquee'>
        <div className='marquee-inner'>
          {continuousLogos.map((logo, index) => (
            <div key={index} className='logo'>
              <h3>{logo.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
