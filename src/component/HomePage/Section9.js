import React from 'react'
import SemButton from '../SemButton'
import Sec9 from '../HomePage/images/sec9.webp';
import '../HomePage/Home.css'


const Section9 = () => {
  return (
    <>
      <div className="section-9 flex justify-center" >
        {/* <div className=" sm:w-full">
            <img src={Sec9} alt="" className="sm:w-full" />
        </div> */}
        <img src={Sec9} alt="" className="sm:w-full" />
        <div className="sec-9-right gap-2">
            <h1 className='font-bold leading-10'>Innovative design is our tool to Reshape business</h1>
            <p>Welcome to our UI/UX design agency! We are a passionate team of creative designers and user experience (UX) experts who are dedicated to crafting intuitive and impactful digital experiences for our clients.</p>
            <p>With years of experience in the field, we have honed our skills to become At our agency</p>
            <SemButton btnName = 'More About us' />
        </div>
      </div>
    </>
  )
}

export default Section9
