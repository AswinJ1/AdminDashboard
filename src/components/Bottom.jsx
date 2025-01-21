import React from "react";

const Bottom = () => {
  return (
    <div className="bg-gray-900 text-white p-2 rounded-lg shadow-md w-full max-w-3xl mx-auto ml-5 mb-2 md:flex">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Popular Campaigns</h2>
        <button className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg flex items-center">
          <span className="mr-2">#2</span> as List
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border-none">
        <table className="w-full text-left text-sm">
          <thead className="">
            <tr>
              <th className="px-4 py-3">Rank</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Admin</th>
              <th className="px-4 py-3">Date </th>
              <th className="px-4 py-3">Business</th>
              <th className="px-4 py-3">Followers</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Operation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {[{
              rank: "#1",
              name: "IBO Advertising",
              admin: "Samuel",
              date: "02/14/2019",
              business: "Advertising",
              followers: ["/assets/profile-3.jpg", "/assets/profile-2.jpg", "/assets/profile-1.jpg"],
              status: "Public",
              operation: "Join",
            },
            {
              rank: "#2",
              name: "Pela Design",
              admin: "Hossein",
              date: "09/23/2017",
              business: "Design Agency",
              followers: ["/assets/profile-3.jpg", "/assets/profile-2.jpg", "/assets/profile-1.jpg"],
              status: "Public",
              operation: "Join",
            },
            {
              rank: "#3",
              name: "Emma Fans",
              admin: "Maria",
              date: "04/05/2023",
              business: "Social Fandom",
              followers: ["/assets/profile-3.jpg", "/assets/profile-2.jpg", "/assets/profile-1.jpg"],
              status: "Private",
              operation: "Join",
            },
            {
              rank: "#4",
              name: "Anaco Projects",
              admin: "Stephanie",
              date: "11/18/2021",
              business: "Programming",
              followers: ["/assets/profile-3.jpg", "/assets/profile-2.jpg", "/assets/profile-1.jpg"],
              status: "Public",
              operation: "Join",
            }].map((campaign, index) => (
              <tr key={index} className="bg-gray-900 hover:bg-gray-800">
                <td className="px-4 py-3">{campaign.rank}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{campaign.name}</td>
                <td className="px-4 py-3 flex items-center text-xs sm:text-sm">
                  <img
                    src={campaign.adminAvatar || "/assets/profile-1.jpg"}
                    alt={campaign.admin}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  {campaign.admin}
                </td>
                <td className="px-4 py-3">{campaign.date}</td>
                <td className="px-4 py-3 text-xs sm:text-sm">{campaign.business}</td>
                <td className="px-4 py-3 flex -space-x-2">
                  {campaign.followers.map((follower, idx) => (
                    <img
                      key={idx}
                      src={follower}
                      alt="follower"
                      className="w-6 h-6 rounded-full border-2 border-gray-900"
                    />
                  ))}
                  <div className='h-6 w-6 rounded-full  border-none mr-3 bg-slate-700 text-white p-[2px] text-center justify-center text-[12px]'>
                99+
              </div>
                </td>
                <td className="px-4 py-3 text-xs sm:text-sm"><div className=" text-black bg-white rounded-full px-3 py-1">{campaign.status}</div></td>
                <td className="px-4 py-3">
                <button
  className={`px-4 py-1 rounded-lg border ${
    campaign.operation === "Join"
      ? "bg-white hover:bg-slate-800 hover:text-white"
      : "bg-white hover:bg-slate-800 hover:text-white"
  } text-black`}
>
  {campaign.operation}
</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bottom;
