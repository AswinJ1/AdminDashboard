import React from 'react';

const Header = () => {
  return (
    <div class="flex fixed space-x-[230px] top-0 left-[69px] right-0 z-[100] bg-black w-full px-4 py-4 border border-slate-700 md:flex">

  <div class="flex items-center">
    <h1 class="text-lg font-bold mr-4 text-white">Dashboard</h1>
    <button class="flex items-center text-sm">
        <img src="/assets/down-arrow.png" alt="" className='h-[16px]' />
    </button>
  </div>

  <div class="flex items-center bg-gray-900 rounded-full p-2  max-w-[280px] w-full">
  <button class="text-gray-500 hover:text-gray-300">
     <img src="/assets/search.svg" alt="" className='h-[18px]' />
    </button>

    <input 
      type="text" 
      placeholder="Search..." 
      class="bg-transparent flex-grow text-sm focus:outline-none px-2 placeholder-white text-white"
    />
    <button class="text-gray-500 hover:text-gray-300">
      <div className='rounded-full bg-slate-800 h-[20px] w-[25px] p-1'>
     <img src="/assets/up-arrow.png" alt="" className='h-[15px] w-[15px]' />
     </div>
    </button>
    
  </div>

  <div class="flex items-center justify-between gap-2">
    
    <div class="flex items-center bg-gray-900 rounded-full p-2 py-1  cursor-pointer">
        <img src="/assets/notification.png" alt="" className='h-[18px] mr-3'/>
      <span class="text-sm rounded-full bg-gray-700 p-2 px-4 text-white">2new</span>
    </div>

    <div class="flex items-center bg-gray-800 rounded-full p-2 py-2 ">
        <img src="/assets/arrow-left.png" alt=""  className='h-[12px] m-2'/>
      <span class="text-sm text-white">Today, Apr 8</span>
      <img src="/assets/arrow-right.png" alt=""  className='h-[12px] m-2'/>

    </div>

   
      <img 
        src="/assets/profile.webp" 
        alt="Profile" 
        class="h-8 w-8 rounded-full"
      />
        <div className='block text-white '>
        <p class="text-sm font-bold items-center flex justify-center">Hossein &nbsp; <img src="/assets/down-arrow.png" alt="" className='h-[8px] '/></p>
        <p class="font-extralight text-xs text-gray-400">user680523</p>

        </div>
      
    </div>
  

</div>

  );
};

export default Header;
