import React from "react";
import { NavLink } from "react-router-dom";

const DoctorProfile: React.FC = () => {
  return (
    <section className="w-full py-[3rem] text-textColor">
      <div className="mx-auto w-[70%] flex max-md:flex-col ">
        <div className="h-full w-[40%]">
          <div className="flex flex-col w-[90%] mx-auto my-[4rem] p-[1rem] text-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <ul className="flex flex-col items-center gap-4 font-[600]">
              <li>
                <NavLink to={"/"} className="w-full h-full p-4">
                  Overview
                </NavLink>
              </li>
              <li>
                <NavLink to={"/appointments"}>Appointments</NavLink>
              </li>
              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>
            </ul>

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
        <div className="w-[60%] border-2 border-black flex flex-col"></div>
      </div>
    </section>
  );
};

export default DoctorProfile;