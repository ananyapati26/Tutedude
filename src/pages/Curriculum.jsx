import React from 'react';
import '../styles/Curriculum.css';

const Curriculum = () => {
  return (
    <div className="course-curriculum">
      <div className="header" style={{textAlign:"center"}}>
        <span className="badge" >DATASCIENCE COURSE LEARNING PATH</span>
        <h1><span className='new'>Data Science </span><span style={{color:"#4C4D52"}}>Course Curriculum</span></h1>
      </div>
      <div className="course-list">
        <div className="course-item">
          <div className="course-info">
            <h2>C++</h2>
            <p>Learn C++ for strong programming fundamentals.</p>
          </div>
          <a href="#" className="view-curriculum"  style={{ textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"small", gap:"10px" }}><img style={{width:"20px"}} src='/images/eye.png'/> View Curriculum</a>
        </div>
        <div className="course-item">
          <div className="course-info"> 
            <h2>MERN Stack</h2>
            <p>Master the MERN stack for high-demand projects.</p>
          </div>
          <a href="#" className="view-curriculum" style={{ textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"small", gap:"10px" }}><img style={{width:"20px"}} src='/images/eye.png'/>View Curriculum</a>
        </div>
        <div className="course-item">
          <div className="course-info">
            <h2>Data Structure & Algorithm</h2>
            <p>Excel in Data Structures and Algorithms for interview success.</p>
          </div>
          <a href="#" className="view-curriculum" style={{ textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"small", gap:"10px" }}><img style={{width:"20px"}} src='/images/eye.png'/>View Curriculum</a>
        </div>
        <div className="course-item">
          <div className="course-info">
            <h2>Competitive Programming</h2>
            <p>Excel in Data Structures and Algorithms for interview success.</p>
          </div>
          <a href="#" className="view-curriculum" style={{ textAlign: "center", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"small", gap:"10px" }}><img style={{width:"20px"}} src='/images/eye.png'/>View Curriculum</a>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
