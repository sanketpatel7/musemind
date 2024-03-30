import React from 'react'
import Section8GridTemplate from './Section8GridTemplate'
import Section8Data from './Section8Data'
import '../HomePage/Home.css'

const Section8 = () => {
  return (
    <>
      <div className="sec-8-grid">
      {Section8Data.map((val) => {
        {/* console.log(val) */}
        return(
          <Section8GridTemplate img = {val.img}/>
        )
      })}
      </div>

      {/* <h1>hellow sanket</h1> */}
    </>
  )
}

export default Section8
