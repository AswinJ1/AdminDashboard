import React from 'react';

const TopCampaign = () => {
  return (
    <div className="bg-slate-900 text-white p-4 rounded-lg lg:w-[378px] w-full mt-8 md:flex sm:flex">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">My Top Campaigns</h2>
        <div className="flex items-center space-x-2">
        <button className="bg-gray-700 p-2 rounded hover:bg-gray-600">
            <img src="/assets/arrow-left.png" alt="" className='h-3 w-3' />
          </button>
          <span className="text-sm text-gray-400">02 of 5</span>
          <button className="bg-gray-700 p-2 rounded hover:bg-gray-600">
            <img src="/assets/arrow-right.png" alt="" className='h-3 w-3' />
          </button>
        </div>
      </div>

      {/* Campaigns Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Campaign Card 1 */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold"><ul className="list-disc pl-5 marker:text-white">
          <li className="text-white">Pela Designs</li></ul></h3>
            <button className="text-gray-400 hover:text-gray-300">
              ⋮
            </button>
          </div>
          <p className="text-sm text-white mb-2"><span className='text-gray-400'>#</span> 3,074 Followers</p>
          <p className="text-xs text-white mb-4"><span className='text-blue-700'>+</span> 9.23%</p>
          <div className="flex justify-between items-center">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
              <img
                src="/assets/profile-1.jpg"
                alt="User 1"
                className="h-7 w-7 rounded-full border-2 border-black"
              />
              <img
                src="\assets\profile-2.jpg"
                alt="User 2"
                className="h-7 w-7 rounded-full border-2 border-black"
              />
              <img
                src="\assets\profile-3.jpg"
                alt="User 2"
                className="h-7 w-7 rounded-full border-2 border-black"
              />
              <div className='h-7 w-7 rounded-full  border-none mr-3 bg-slate-700 text-white p-1 text-center justify-center text-[12px]'>
                99+
              </div>
            </div>
            <button className="bg-white text-black text-sm  p-1 h-7 w-7 rounded-full hover:bg-neutral-300">
              +
            </button>
          </div>
        </div>

        {/* Campaign Card 2 */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold"><ul className="list-disc pl-5 marker:text-blue-500">
             <li className="text-white">Elexir Ads</li></ul></h3>
            <button className="text-gray-400 hover:text-gray-300">
              ⋮
            </button>
          </div>
          <p className="text-sm text-white mb-2"><span className='text-gray-400'>#</span> 2,931 Followers</p>
          <p className="text-xs text-white mb-4"><span className='text-blue-700'>+</span> 7.59%</p>
          <div className="flex justify-between items-center">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
            <img
                src="/assets/profile-1.jpg"
                alt="User 1"
                className="h-7 w-7 rounded-full border-2 border-black"
              />
              <img
                src="\assets\profile-2.jpg"
                alt="User 2"
                className="h-7 w-7 rounded-full border-2 border-black"
              />
              <img
                src="\assets\profile-3.jpg"
                alt="User 2"
                className="h-7 w-7 rounded-full border-2 border-black"
              />
              <div className='h-7 w-7 rounded-full  border-none mr-3 bg-slate-700 text-white p-1 text-center justify-center text-[12px]'>
                99+
              </div>
            </div>
            <button className="bg-white text-black text-sm  p-1 h-7 w-7 rounded-full hover:bg-neutral-300">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCampaign;
