import React from 'react';
import '../styles/Overview.css';

const Overview = () => {
  return (
    <div className="course-landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-container">

          <div className='iit' style={{ border: "2px solid #FFA50B", padding: "5px", fontSize: "small", borderRadius:"20px" }}>
            <h3 style={{ textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"small", gap:"10px" }}><img style={{width:"20px"}} src='/images/cap.png'alt='cap'/>  An IIT Delhi Alumni Initiative</h3>
          </div>

          <div className="hero-text-wrapper">
            <h1>
              Become an Expert in the field of <span style={{ color: '#992E9D' }}>Data Science with 6 Courses</span>
            </h1>
            <p>
              A specially crafted Tech Kickstarter, <span style={{ fontWeight: "bold" }}>with 5+ extensive online courses.</span>
            </p>
            
            <div class="extra" style={{marginTop:"-10px", fontFamily:""}}>
                  <div class="course-hero">
                    <div class="course-hero-container">
                      <button>Personal Mentorship</button>
                      <button>Internship Assistance</button>
                      <button>Industry Certified Courses</button>
                    </div>
                  </div>
                </div>

            <div className="hero-buttons">
              <button style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"small", gap:"10px", fontFamily:"Poppins", fontWeight:"bold" }}>Enroll Now <img style={{width:"20px"}} src='/images/plane.png'/></button>
              <button style={{display:"flex", alignItems:"center", justifyContent:"center", fontSize:"small", gap:"10px", fontFamily:"Poppins", fontWeight:"bold" }}>Know More <img style={{width:"20px"}} src='/images/mark.png'/></button>
            </div>
          </div>
        </div>
        <img src='/images/map3.png' className='full-width-image' alt='Map' />
      </div>

      
    </div>
  );
};

export default Overview;
