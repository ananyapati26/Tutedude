import React from 'react';
import '../styles/Refund.css';

const Refund = () => {
  return (
    <div className="refund-offer">
      <div className="header">
        <h1>Don't miss out on this <span className="highlight">limited-time opportunity</span> to learn for <span className="highlight">Free!</span></h1>
      </div>

      <div className="offer-box">
        <div className="offer-details">
        <div className="refund-offer-text">100% Refund Offer 😎</div>
        <div className="seats-left">20 Seats Left</div>
        {/* <progress value="32" max="100"></progress> */}
        <div className="slider-container">
              <progress value="70" max="100" className="slider"></progress>
              <div className="slider-circle"></div>
            </div>
          <div className="time-left">Offer ends in: 10:00 Mins</div>
        </div>
      </div>
      
      <div className="steps">
        <h3>How does it work?</h3>
        <div className="step-container">
          <div className="step">
            <div className="step-details">
              <h4 style={{color:"#7F2781"}}>Step 1 : Enroll into your favorite course for only ₹1,499</h4>
              <div style={{display:"flex", justifyContent:"center"}}>
              <img style={{width:"100px"}} src='/images/girl.png'/>
              </div>
              <p>Start Learning with <span style={{fontWeight:"bold", color:"#1B1B1D"}}>Lifetime Course Access.</span></p>
            </div>
          </div>
          <div className="step">
            <div className="step-details">
              <h4 style={{color:"#7F2781"}}>Step 2 : Complete Course & Assignments within 2 Years!</h4>
              <div style={{display:"flex", gap:"10px", border:"2px solid #E5E5E8", borderRadius:"20px", padding:"10px"}}>
                <h1 style={{color:"#E27900"}}>2</h1>
                <p style={{color:"#4C4D52"}}>years time from the date of enrollment</p>
              </div>
              <p>Finish the course within <span style={{fontWeight:"bold", color:"#1B1B1D"}}>2 Years</span>  to Qualify for Refund.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-details">
              <h4 style={{color:"#7F2781"}}>Step 3 : Receive 100% Refund upon completion</h4>
              <div style={{display:"flex", gap:"10px", border:"2px solid #E5E5E8", borderRadius:"20px", padding:"10px"}}>
                <h1 style={{color:"#E27900"}}>100%</h1>
                <p style={{color:"#4C4D52"}}>Enrollment Fee is refunded</p>
              </div>
              <p>Upon Course Completion within <span style={{fontWeight:"bold", color:"#1B1B1D"}}>2 Years</span>, Get Your <span style={{fontWeight:"bold", color:"#1B1B1D"}}>₹1,499 Back.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refund;
