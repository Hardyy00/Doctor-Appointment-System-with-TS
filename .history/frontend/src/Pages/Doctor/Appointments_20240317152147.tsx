import { useQuery } from "@tanstack/react-query";
import { Appointment, Doctor } from "../../assets/data/doctors";
import { useSelectorTyped } from "../../hooks/hooks";
import { ClipLoader } from "react-spinners";
import { getAppointments } from "../../util/http";
// import { doctor } from "./DoctorDescription";

const Appointments = () => {
  const doctorId: string = useSelectorTyped((state) => state.user?._id);

  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["doctor", doctorId],
    queryFn: ({ signal }) => getAppointments({ signal, doctorId }),
  });

  return (
    <>
      {!isLoading && appointments && appointments.length > 0 ? (
        <table className="text-center md:border-spacing-8 border-spacing-1 max-sm:border-spacing-y-4 text-textColor border-separate w-full ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Payment</th>
              <th>Price</th>
              <th>Booked on</th>
            </tr>
          </thead>

          <tbody>
            {appointments
              .filter((item) => item.status === "approved")
              .map((item) => (
                <AppointmentRow key={item.id} appoint={item} />
              ))}
          </tbody>
        </table>
      ) : (
        <h1 className="font-[800] text-[1.4rem]">No Appointments</h1>
      )}

      {isLoading && <ClipLoader size={28} color="blue" />}
    </>
  );
};

const AppointmentRow: React.FC<{ appoint: Appointment }> = ({ appoint }) => {
  return (
    <tr className="font-[500] text-purple-500 border">
      <td className="border p-[0.5rem] rounded-lg bg-green-500 text-white">
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
