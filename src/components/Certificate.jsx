import React from 'react'
import '../styles/Certificate.css'


const Certificate = () => {
  return (
    <div className='holder'>
    <div className='certificate-head'>
      <h1 >Unlock <span>6 Certificates</span> & <span>Internship Opportunities!</span></h1>
    </div>
    <div className='cards'>
      <div className='certificate'>
        <h3>Get 6 Industry Recognised Certificates!</h3>
        <img style={{width:"300px"}} src='/images/certificate.png'/>
        <div className='features'>
          <div style={{backgroundColor:"#F4D6F8",padding:"3px", paddingTop:"1px", borderRadius:"30px", border:"1px solid #F4D6F8"}}>
            <p style={{display:"flex", alignItems:"center", gap:"5px"}}><img style={{width:"22.6px"}} src='/images/star.png'/>Official and Verified</p>
          </div>
          <div style={{backgroundColor:"#F4D6F8",padding:"3px", paddingTop:"1px", borderRadius:"30px",border:"1px solid #F4D6F8"}}>
            <p style={{display:"flex", alignItems:"center", gap:"5px"}}><img style={{width:"22.6px"}} src='/images/star.png'/>Enhances Credibility</p>
          </div>
        </div>
      </div>
      <div className='internship'>
        <h3>Bag Internship Opportunities</h3>
        <p>With every course we make you not only industry-ready but also help you crack your first internship</p>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"40px"}}>
        <img style={{width:"300px"}} src='/images/table.png'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Certificate
