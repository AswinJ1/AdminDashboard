import React from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

const Top = () => {
  return (
 
    <div className='grid lg:grid-cols-[55%_45%] gap-6 ml-5 mt-2 sm:mx-3 sm:p-2 sm:grid-cols-1 md:grid-cols-[55%_45%] sm:overflow-hidden lg:overflow-hidden'>
      <TopLeft></TopLeft>
      <TopRight></TopRight>

      
    </div>
    
  )
}

export default Top
