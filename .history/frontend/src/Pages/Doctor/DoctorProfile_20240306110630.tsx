import React from "react";

const DoctorProfile: React.FC = () => {
  return (
    <section className="w-full py-[3rem]">
      <div className="mx-auto w-[70%] flex border-2 border-black">
        <div className="h-full border-2 border-black w-[40%]">
          <div className="flex flex-col w-[90%] mx-auto my-[4rem] p-[1rem] text-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
            <ul>
              <li>Overview</li>
              <li>Appointments</li>
              <li>Profile</li>
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
