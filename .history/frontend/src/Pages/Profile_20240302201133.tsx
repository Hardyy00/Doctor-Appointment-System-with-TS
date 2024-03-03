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
    <section className="border-2  px-[6rem] p-[3rem] flex justify-center">
      <div className="flex border-2 border-black w-[70%] p-[1rem]">
        <div className="flex flex-col w-[40%] border-black border-2 items-center justify-between">
          <div className="flex flex-col gap-[1rem] items-center justify-between">
            <div className="h-[8rem] w-[8rem] rounded-[50%] overflow-clip">
              <img src={user.image} alt="" className="object-cover h-full" />
            </div>

            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.bloodType}</p>
          </div>

          <div className="flex flex-col">
            <button className="">Logout</button>
            <button>Delete Account</button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Profile;
