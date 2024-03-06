import React from "react";

const DoctorProfile: React.FC = () => {
  return (
    <section className="w-full py-[3rem]">
      <div className="mx-auto w-[70%] flex border-2 border-black">
        <div className="h-full border-2 border-black w-[40%]">
          <div className="flex flex-col w-[90%] mx-auto my-[4rem] p-[1rem] text-cente shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]r">
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
