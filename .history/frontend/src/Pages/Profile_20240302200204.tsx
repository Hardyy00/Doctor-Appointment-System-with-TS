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
    <section className="border-2 h-[92vh] px-[6rem] p-[3rem]">
      <div className="flex">
        <div className="flex flex-col w-[80%]"></div>
        <div></div>
      </div>
    </section>
  );
};

export default Profile;
