import { User } from "../assets/data/doctors";
import Image from "../assets/images/doc3.jpg";

const Profile: React.FC = () => {
  const user: User = {
    email: "xyz@gmail.com",
    name: "Hardik Gaur",
    phone: 955235345,
    image: Image,
    role: "Patient",
    gender: "Male",
    bloodType: "A+",
    appointments: [{ doctor : , ticketPrice: 800, appointmentDate: "27 May 2024", isPaid: true,timeStamp: "5 march , 2022", status: "approved" }],
  };
  return <section></section>;
};

export default Profile;
