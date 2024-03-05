import { User } from "../../assets/data/doctors";
import DoctorCard from "../DoctorCard/DoctorCard";

const MyBookings: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-[800] text-[1.4rem]">My Appointments</h1>

      <div className="grid grid-cols-2 gap-[1rem] place-items-center">
        {user.appointments?.map((item) => (
          <DoctorCard doctor={item.doctor} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;