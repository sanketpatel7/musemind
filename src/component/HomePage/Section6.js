import React from 'react'
import Section6DropDown from './Section6DropDown'
import Section6DropData from './Section6DropData'

const Section6 = () => {
  return (
    <>
      {/* <Section6DropDown /> */}

      <div className='py-24 bg-black w-full overflow-hidden'>
        <h1 className='text-2xl text-white px-10'>Services we offer</h1>
        {Section6DropData.map((val , ind) => {
          return(
            <Section6DropDown key={ind}  mainp = {val.mainp} mainh1 = {val.mainh1}  mainimg = {val.mainimg} hovtext = {val.hovtext} />
          )
        })}
      </div>
      
    </>
  )
}

export default Section6
