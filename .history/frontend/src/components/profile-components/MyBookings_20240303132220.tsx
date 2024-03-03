import { Appointment, User } from "../../assets/data/doctors";
import DoctorCard from "../DoctorCard/DoctorCard";

const MyBookings: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-[800] text-[1.4rem]">My Appointments</h1>

      <div className="grid grid-cols-2 gap-x-[2rem]">
        {user.appointments?.map((item) => (
          <DoctorCard doctor={item.doctor} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const UserAppointment: React.FC<{ appoitment: Appointment }> = ({
  appoitment,
}) => {
  return (
    <div>
      <h1>{appoitment.doctor.name}</h1>
    </div>
  );
};

export default MyBookings;
