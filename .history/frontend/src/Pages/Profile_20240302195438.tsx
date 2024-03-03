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
    appointments: [{ user }],
  };
  return <section></section>;
};

export default Profile;
