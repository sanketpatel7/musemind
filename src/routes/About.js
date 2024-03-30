import React from 'react'
import Header from '../component/Header'
// import BGvideo from '../component/HomePage/images/pexels-rostislav-uzunov-9150545 (720p).mp4'
import '../index.css' 
import Section4Card from '../component/HomePage/Section4Card'
import SemButton from '../component/SemButton'
import Test from '../component/Test'
import AboutChild from '../component/About/AboutChild'
// import { Button } from 'react-scroll'

const About = () => {
  return (
    <div>
      {/* <h1>this page is about page</h1> */}

      {/* <Header /> */}
      <Test />
      <AboutChild />
     {/* <SemButton btnName = "AboutUs"/> */}
    </div>
  )
}

export default About
