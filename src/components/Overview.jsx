import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "chartjs-adapter-date-fns";


Chart.register(...registerables);

const Overview = () => {
  // Sample Data
  const rawData = [3000.65, 3500.65, 3450.65, 4000.65, 3900.65, 2000.65, 5938.65];
  const labels = ["Mar 8", "Mar 13", "Mar 18", "Mar 23", "Mar 28", "Mar 29", "Apr 8"];
  const percentageChanges = rawData.map(
    (value, index) =>
      index > 0 ? ((value - rawData[index - 1]) / rawData[index - 1]) * 100 : 0
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revenue",
        data: rawData,
        borderColor: "#00BFFF", // Line color
        backgroundColor: "rgba(0, 191, 255, 0.2)", // Area under the line
        pointBackgroundColor: "#FFFFFF",
        pointHoverRadius: 7,
        tension: 0.5, // Smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        intersect: false,
        callbacks: {
          title: (context) => `Date: ${context[0].label}`,
          label: (context) => {
            const value = context.raw;
            const percentage =
              context.dataIndex > 0
                ? percentageChanges[context.dataIndex].toFixed(2)
                : "0.00";
            return `${value.toLocaleString()} (${percentage}%)`;
          },
        },
        backgroundColor: "#1a202c", // Tooltip background
        titleColor: "#A0AEC0",
        bodyColor: "#FFFFFF",
        borderColor: "#2D3748",
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: { color: "#A0AEC0" },
      },
      y: {
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        ticks: {
          display: false // No dollar symbol
        },
      },
    },
  };

  return (
    
    <div className="mr-0">
  {/* My Campaigns Section */}
  <div className="flex items-center mb-6">
    <div className="mr-[24px]">
      <h2 className="text-lg font-semibold text-white">My Campaigns</h2>
      <p className="text-sm text-gray-400">3 persons and <strong className="text-white">@yorimaldo</strong> have access.</p>
    </div>

    <div className="">
      <select
        className="bg-gray-800 text-white text-sm rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <option>Finance</option>
        <option>Marketing</option>
        <option>Sales</option>
      </select>
    </div>
  </div>

  {/* Overview Card */}
  <div className="bg-slate-900 p-4 rounded-2xl shadow hover:opacity-80 text-white lg:w-[378px] w-full border">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-md font-bold">Overview</h3>
      <button className="text-gray-500 hover:text-gray-300">
        <img src="\assets\info.svg" className="h-[20px] rounded-full" alt="" />
      </button>
    </div>

    {/* Subheader */}
    <div className="flex justify-between mb-6">
      <div>
        <p className="text-sm text-gray-400">Max records</p>
        <p className="text-sm text-gray-400">Comparative rates</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-neutral-50">2 times increase to the last month</p>
        <p className="text-sm text-neutral-50">
          <span className="bold text-blue-900 shadow">+</span>12.83%
        </p>
      </div>
    </div>

    {/* Time Frame Buttons */}
    <div className="flex gap-4 mb-6 border p-4 rounded-l-full rounded-r-full border-gray-500 justify-between">
      <button className="flex-1 py-1 rounded-md text-sm text-gray-400 hover:bg-gray-700">
        24h
      </button>
      <button className="flex-1 py-1 rounded-md text-sm text-gray-400 hover:bg-gray-700">
        Week
      </button>
      <button className="flex-1 py-1 rounded-md bg-gray-600 text-sm text-white">
        Month
      </button>
    </div>

    {/* Chart */}
    <div className="h-48">
      <Line data={data} options={options} />
    </div>

    {/* Footer */}
    <div className="flex justify-between items-center mt-4">
      <div>
        <p className="text-2xl font-bold text-neutral-50">
          <span className="text-blue-400">+</span>19.23%
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-400 text-right">Last updated</p>
        <p className="text-sm text-neutral-50">Today, 06:49 AM</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Overview;
