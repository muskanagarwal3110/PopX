import React, { useEffect, useState } from "react";
const Dashboard = function () {
  const [user, setUser] = useState({ name: "", email: "" });
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("signupData"))
    if (storedUser) {
      setUser({
        name: storedUser.name?.trim() || "",
        email: storedUser.email?.trim() || ""
      });
    }
  }, []);
  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="w-96 h-[85vh] bg-white shadow rounded-lg flex flex-col justify-start">
        <div className='w-full h-15 bg-gray-200 flex flex-col items-start text-2xl pt-2 px-2'>
          <h1>Account Settings</h1>
        </div>
        <div className='flex flex-row justify-start mt-5'>
          <div>
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <div className="relative bottom-9 left-17 w-7 h-7 bg-blue-300 rounded-full p-1 cursor-pointer">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 13V16H7L16 7L13 4L4 13Z" />
              </svg>
            </div>
          </div>
          <div className="mx-5">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="text-left font-semibold ">
          <p className="px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit ipsa ut sed in sit eaque labore deleniti earum consequuntur saepe exercitationem voluptatibus ipsum tempore!</p>
          <hr className="border-t border-dotted border-gray-400 mt-4" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;