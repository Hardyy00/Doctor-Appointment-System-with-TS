import React from "react";

const DoctorProfile: React.FC = () => {
  return (
    <section className="w-full h-[92vh] py-[3rem]">
      <div className="mx-auto w-[70%] flex border-2 border-black h-[80%]">
        <div className="h-full border-2 border-black w-[40%]">
          <div className="flex flex-col border-2 border-black w-[90%]">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <div>
              <button>Logout</button>
              <button>Delete Account</button>
            </div>
          </div>
        </div>
        <div className="w-[60%] border-2 border-black flex flex-col"></div>
      </div>
    </section>
  );
};

export default DoctorProfile;
