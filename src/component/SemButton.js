import React from 'react'
import './button.css'
import BtnArrow from '../images/btn-arrow.png'

const SemButton= (props) => {
  return (
    <>
      {/* <div className='button hover:duration-1000'> */}
      <div className='button'>
        <button className=' px-10 py-3 bg-yellow-400 text-black rounded-full font-semibold'>{props.btnName}</button>
        <button className='bg-yellow-400 px-4 py-3 rounded-full'><img src={BtnArrow} className='btn-img'/></button>
      </div>
    </>
  )
}

export default SemButton
