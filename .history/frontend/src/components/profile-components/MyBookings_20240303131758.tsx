import { Appointment, User } from "../../assets/data/doctors";

const MyBookings: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <h1 className="font-[800] text-[1.4rem]">My Appointments</h1>

      <div>
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
      <h1>{appoitment.doctor}</h1>
    </div>
  );
};

export default MyBookings;
