import React from "react";

const TopLeft = () => {
  return (
    <div className="w-full md:mr-[100px] sm:mr-0 "> {/* Adjust margin for smaller screens */}
      <div className="flex items-center mb-6 flex-wrap"> {/* Added flex-wrap for responsiveness */}
        <div className="mr-[90px]">
          <h2 className="text-lg font-semibold text-white">Total Balance</h2>
          <p className="text-sm text-gray-400">Sum of all amounts of <strong className="text-white">my wallet</strong></p>
        </div>

        <div>
          <select
            className="bg-gray-800 text-white text-sm rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option>US Dollar</option>
            <option>JPN Yen</option>
            <option>IND Rupees</option>
          </select>
        </div>
      </div>

      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md w-full max-w-full sm:max-w-[800px] mx-auto"> {/* Make max-width responsive */}
        <div className="flex justify-between items-center mb-4">
          
        </div>

        <div className="mb-4">
    <div className="flex justify-between">
  <h3 className="text-4xl font-bold text-white">
  <span className="text-blue-700">$</span> 23,094.57 
  </h3>
  <span className="text-xs font-thin text-white"> Compared to last month</span>
  </div>
  <div className="flex justify-end mt-0 text-sm text-gray-400">
    <span className="text-red-500">-37.16%</span>
  </div>
</div>

<div className="mb-4 text-sm text-gray-400 flex items-center">
  <span>Yearly avg:</span>
  <span className="ml-2 text-white inline-flex items-center text-sm">
    <span className="text-blue-700">$</span> 34,502.19 
    <img src="/assets/arrow.png" alt="" className="h-[18px] ml-1" />
  </span>
  <span className="ml-auto text-blue-400 inline-flex items-center text-sm cursor-pointer">
    <div className="bg-gray-700 h-[13px] w-[13px] rounded-full flex items-center justify-center p-0.5 mr-1">
      <img src="/assets/question.png" alt="" className="h-[12px]" />
    </div>
    How it works?
  </span>
</div>    
<div className="flex justify-center mt-4">
            <img
              src="/assets/ai.png"
              alt="AI Assistant"
              className="w-full h-full animate-spin-slow rounded"
            />
         
        </div>
      </div>
    </div>
  );
};

export default TopLeft;
