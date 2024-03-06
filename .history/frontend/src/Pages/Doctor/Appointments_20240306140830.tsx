import { Appointment } from "../../assets/data/doctors";
import { doctor } from "./DoctorDescription";

const Appointments = () => {
  //   return (
  //     <table className="w-full">
  //       <tr>
  //         <th>Name</th>
  //         <th>Gender</th>
  //         <th>Payment</th>
  //         <th>Price</th>
  //         <th>Booked on</th>
  //       </tr>

  //     </table>
  //   );

  return doctor.appointments && doctor.appointments.length > 0 ? (
    <table className="text-center border-spacing-8   text-textColor border-separate">
      <thead>
        <tr className="">
          <th>Name</th>
          <th>Gender</th>
          <th>Payment</th>
          <th>Price</th>
          <th>Booked on</th>
        </tr>
      </thead>

      <tbody>
        {doctor.appointments.map((item) => (
          <AppointmentRow key={item.id} appoint={item} />
        ))}
      </tbody>
    </table>
  ) : (
    <h1>No Appointments</h1>
  );
};

const AppointmentRow: React.FC<{ appoint: Appointment }> = ({ appoint }) => {
  return (
    <tr className="font-[500] text-purple-500 border">
      <td className="border p-[0.5rem] rounded-lg border-red-500 bg-green-500 text-white">
        {appoint.user?.name}
      </td>
      <td>{appoint.user?.gender}</td>
      <td>{appoint.isPaid ? "YES" : "NO"}</td>
      <td>{appoint.ticketPrice}</td>
      <td>{appoint.timeStamp}</td>
    </tr>
  );
};

export default Appointments;
