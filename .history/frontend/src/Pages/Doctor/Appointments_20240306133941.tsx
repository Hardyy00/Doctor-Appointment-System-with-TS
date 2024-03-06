import { Appointment } from "../../assets/data/doctors";
import { doctor } from "./DoctorDescription";

const Appointments = () => {
    
  return (
    <table className="w-full">
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Payment</th>
        <th>Price</th>
        <th>Booked on</th>
      </tr>

        {doctor.}
      
    </table>
  );
};

const AppointmentRow : React.FC<{appoint : Appointment}> = ({appoint})=>{

    return <tr></tr>
}

export default Appointments;
