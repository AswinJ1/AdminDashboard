import React from 'react'
import Overview from './Overview'
import TopCampaign from './TopCampaign'


const LeftMain = () => {
  return (
    <div className='grid grid-cols-1  lg:w-[378px] w-full bg-black mt-2 mb-2 mr-5 md:flex'>
   
      <Overview></Overview>
      <TopCampaign></TopCampaign>
  
    </div>
  )
}

export default LeftMain
