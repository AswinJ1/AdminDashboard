import React from 'react'
import Bottom from './Bottom'
import Top from './Top'

const RightMain = () => {
  return (
    <div className='grid grid-cols-1 bg-black gap-4 border border-slate-700 sm:grid-cols-1 '>
      <Top></Top>
      <Bottom></Bottom>
      
    </div>
  )
}

export default RightMain
