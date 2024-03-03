import { NavLink, Outlet } from "react-router-dom";
import { User } from "../assets/data/doctors";
import Image from "../assets/images/doc3.jpg";
import { doctor } from "./Doctor/DoctorDescription";

const Profile: React.FC = () => {
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
    <section className=" px-[6rem] pb-[5rem] pt-[3rem] flex justify-center">
      <div className="flex max-md:flex-col w-[70%] p-[1rem]">
        <div className="flex flex-col w-[40%]  items-center justify-between gap-[5rem]">
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
        <div className="flex flex-col w-full">
          <header className="flex items-center gap-8">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-primaryColor "
                  : "font-[600] text-textColor p-[0.8rem] border-2 border-gray-300  rounded-md"
              }
            >
              My Bookings
            </NavLink>
            <NavLink
              to="/profile/settings"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-primaryColor p-[0.8rem] rounded-md"
                  : "font-[600] text-textColor p-[0.8rem] border-2 border-gray-300"
              }
            >
              Settings
            </NavLink>
          </header>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
