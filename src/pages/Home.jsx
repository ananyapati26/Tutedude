import React from 'react'
import Navbar from '../components/Navbar'
import Curriculum from './Curriculum'
import Testimonials from './Testimonials'
import Overview from './Overview'
import Refund from './Refund'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Overview/>
      <Curriculum/>
      <Refund/>
      <Testimonials/>
    </div>
  )
}

export default Home
