import React from 'react';
import '../styles/InternshipProgram.css';

const InternshipProgram = () => {
  return (
    <div className='program'>
      <h1 className='old'>How does the Internship Program work?</h1>
      <img src='/images/map.png' className='map-desktop' alt='Map for desktop'/>
      <img src='/images/map2.png' className='map-mobile' alt='Map for mobile'/>
      <button>Apply now for ₹ 2999</button>
    </div>
  );
}

export default InternshipProgram;
