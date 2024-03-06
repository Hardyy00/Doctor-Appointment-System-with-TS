import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const links = [
  { text: "Overview", path: "/" },
  { text: "Appointments", path: "/appointments" },
  { text: "Profile", path: "/profile" },
];

const DoctorProfile: React.FC = () => {
  return (
    <section className="w-full py-[3rem] text-textColor">
      <div className="mx-auto lg:w-[70%] flex max-md:flex-col max-md:items-center ">
        <div className="h-full lg:w-[40%] w-[80%]">
          <div className="flex flex-col w-[90%] mx-auto mt-[1rem] mb-[4rem] p-[1rem] text-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md pb-[2rem]">
            <div className="flex flex-col w-full gap-3">
              {links.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "py-[0.6rem] bg-primaryColor/20 text-primaryColor font-[600] rounded-md"
                      : "py-[0.6rem]"
                  }
                >
                  {item.text}
                </NavLink>
              ))}
            </div>

            <div className="flex flex-col mt-[4rem] w-full max-w-[90%] gap-4 item-center mx-auto">
              <button className="p-[1rem] bg-textColor text-white font-[600] rounded-md">
                Logout
              </button>
              <button className="p-[1rem] bg-red-500 text-white font-[600] rounded-md">
                Delete Account
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[60%] md:w-[70%] flex-col px-4 py-6">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
