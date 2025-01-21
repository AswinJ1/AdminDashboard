import React from 'react';

const TopRight = () => {
  return (
    <div className="w-80 bg-slate-900 text-white rounded-2xl p-4 shadow-lg space-y-4 relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xs uppercase text-gray-400">Ads</span>
        <button className="text-sm text-gray-400 flex items-center"> Next 
        <img src="/assets/arrow-right.png" alt="" className="h-[10px] ml-1" />
        </button>
      </div>
      <span className='text-white text-sm font-thin'>Promoted by Carbon</span>


      {/* Main Content */}
      <div className="space-y-2">
        <button className="p-4 bg-gray-700 rounded w-full  text-sm uppercase tracking-wide">
          Just for today!
        </button>
        <div className="space-y-1">
          <img src="/assets/premium.png" alt="" />
        </div>
        <p className="text-xs text-white leading-tight">
          Our premium subscription elevates your experience and unlocks a range of benefits tailored to your preferences.
        </p>
        <a
       href="#" className="text-white text-sm flex items-center">Learn more
       <img src="/assets/arrow-right.png" alt="" className="h-[10px] ml-1" />
       </a>

      </div>

      {/* Footer */}
      <div className='mt-5'>
      <div className="flex justify-between items-center border-t border-gray-700 pt-4 ">
        <button className="text-sm text-gray-400">Don't show again</button>
        <button className="px-4 py-2 bg-white text-black font-medium text-sm rounded-full">
          Get started
        </button>
      </div>
      </div>
    </div>
  );
};

export default TopRight;
