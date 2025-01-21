import React from 'react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 bottom-0  z-[200] w-[72px] top-0 h-screen bg-black flex flex-col items-center border border-slate-700">
    <div className="mb-[24px] h-[34px] w-[40px] cursor-pointer flex items-center justify-center flex-col ">
      <img src="/assets/Logo.svg" alt="Logo" className="h-[30px] mb-[4px] pt-2 mt-4" />
    </div>
  
    <div className="mb-[24px] mt-[24px] h-[28px] p-1 w-[40px] rounded-md cursor-pointer flex items-center justify-center flex-col hover:bg-gray-600">
      <img src="/assets/home.png" alt="Home" className="h-[24px] mb-[4px] " />
    </div>
  
    <div className="mb-[24px] h-[28px] p-1 w-[40px] rounded-md cursor-pointer flex items-center justify-center flex-col hover:bg-gray-600">
      <img src="/assets/megaphone.png" alt="Announcements" className="h-[24px] mb-[4px]" />
    </div>
    <div className="mb-[24px] h-[28px] p-1 w-[40px] rounded-md cursor-pointer flex items-center justify-center flex-col hover:bg-gray-600">
      <img src="/assets/clipboard.png" alt="Announcements" className="h-[24px] mb-[4px]" />
    </div>
    <div className="mb-[24px] h-[28px] p-1 w-[40px] rounded-md cursor-pointer flex items-center justify-center flex-col hover:bg-gray-600">
      <img src="/assets/mortarboard.png" alt="Announcements" className="h-[24px] mb-[4px]" />
    </div>     
    <div className="mb-[24px] h-[28px] p-1 w-[40px] rounded-md cursor-pointer flex items-center justify-center flex-col hover:bg-gray-600">
      <img src="/assets/credit.png" alt="Announcements" className="h-[24px] mb-[4px]" />
    </div>
    <div className="mt-[188px] mb-[24px] h-[28px] p-1 w-[40px] rounded-md cursor-pointer flex items-center justify-center flex-col hover:bg-gray-600">
      <img src="/assets/settings.svg" alt="Announcements" className="h-[24px] mb-[4px]" />
    </div>
    <div className="mb-[24px] h-[28px] p-1 w-[40px] rounded-md cursor-pointer flex items-center justify-center flex-col hover:bg-gray-600">
      <img src="/assets/logout.png" alt="Announcements" className="h-[24px] mb-[4px]" />
    </div>
  </div>
  
  );
};

export default Sidebar;
