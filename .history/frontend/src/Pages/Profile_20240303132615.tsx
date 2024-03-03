import { NavLink, Outlet } from "react-router-dom";
import { User } from "../assets/data/doctors";
import Image from "../assets/images/doc3.jpg";
import { doctor } from "./Doctor/DoctorDescription";
import { useState } from "react";
import Settings from "../components/profile-components/Settings";
import MyBookings from "../components/profile-components/MyBookings";

const Profile: React.FC = () => {
  const [isBook, setIsBook] = useState<boolean>(true);
  const user: User = {
    email: "xyz@gmail.com",
    name: "Hardik Gaur",
    phone: 955235345,
    image: Image,
    role: "Patient",
    gender: "Male",
    bloodType: "A+",
    appointments: [
      {
        id: "a1",
        doctor,
        ticketPrice: 800,
        appointmentDate: "27 May 2024",
        isPaid: true,
        timeStamp: "5 march , 2022",
        status: "approved",
      },
      {
        id: "a2",
        doctor,
        ticketPrice: 800,
        appointmentDate: "27 May 2024",
        isPaid: true,
        timeStamp: "5 march , 2022",
        status: "approved",
      },
    ],
  };
  return (
    <section className=" px-[6rem] pb-[5rem] pt-[3rem] flex justify-center text-textColor">
      <div className="flex max-md:flex-col w-[100%] p-[1rem] justify-between">
        <div className="flex flex-col w-[30%]  items-center justify-between">
          <div className="flex flex-col items-center justify-between">
            <div className="h-[8rem] w-[8rem] rounded-[50%] overflow-clip">
              {/* <img src={user.image} alt="" className="object-cover h-full" /> */}
            </div>

            <h2 className="mt-[1rem]">{user.name}</h2>
            <p className="mt-[0.3rem]">{user.email}</p>
            <p>Blood Type : {user.bloodType}</p>
          </div>

          <div className="flex flex-col w-full items-center gap-4">
            <button className="w-[90%] bg-textColor py-[1rem] rounded-md text-white font-[500]">
              Logout
            </button>
            <button className="w-[90%] bg-red-500 py-[1rem] rounded-md text-white font-[500]">
              Delete Account
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[60%] gap-[3rem]">
          <header className="flex items-center gap-8">
            <button
              className={`border-2 border-gray-300 p-[0.8rem] rounded-md font-[600] ${
                isBook && "bg-primaryColor text-white border-none"
              }`}
              onClick={() => setIsBook(true)}
            >
              My Bookings
            </button>

            <button
              className={`border-2 border-gray-300 p-[0.8rem] rounded-md font-[600] ${
                !isBook && "bg-primaryColor text-white border-none"
              }`}
              onClick={() => setIsBook(false)}
            >
              Settings
            </button>
          </header>

          <div>
            {isBook && <MyBookings user={user} />}
            {!isBook && <Settings />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
