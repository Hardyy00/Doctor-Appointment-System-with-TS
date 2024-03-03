import { Appointment, User } from "../../assets/data/doctors";

const MyBookings: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-[800] text-[1.4rem]">My Appointments</h1>

      <div className="grid grid-cols-2">
        {user.appointments?.map((item) => (
          <UserAppointment key={item.id} appoitment={item} />
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
