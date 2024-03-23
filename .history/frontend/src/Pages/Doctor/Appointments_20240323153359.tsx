import { useQuery } from "@tanstack/react-query";
import { Appointment, User } from "../../assets/data/doctors";
import { useSelectorTyped } from "../../hooks/hooks";
import { ClipLoader } from "react-spinners";
import { getAppointments } from "../../util/http";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useDispatchTyped } from "../../hooks/hooks";
import { userActions } from "../../store/UserSlice";

const Appointments = () => {
  const dispatch = useDispatchTyped();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookies, removeCookies] = useCookies();
  const navigate = useNavigate();
  const { doctorId, role } = useSelectorTyped((state) => {
    return {
      doctorId: state.user?._id as string,
      role: state.user?.role,
    };
  });

  const user: User | undefined = useSelectorTyped(
    (state) => state.user as User | undefined
  );

  useEffect(() => {
    if (user) {
      return;
    }
    try {
      const verifyUser = async () => {
        const token: string | undefined = cookies.jwt;

        if (!token) {
          console.log("no token");
          navigate("/");
        } else {
          const { data } = await axios.get(import.meta.env.VITE_BASE_URI, {
            withCredentials: true,
          });

          if (data && !user) {
            dispatch(userActions.login(data));
          } else if (data.errors) {
            removeCookies("jwt");
          }
        }
      };

      verifyUser();
    } catch (err) {
      console.log(err);
    }
  }, [cookies, navigate, removeCookies, dispatch, user]);

  const {
    data: appointments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["doctor", doctorId],
    queryFn: ({ signal }) => getAppointments({ signal, id: doctorId, role }),
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
                <AppointmentRow key={item?._id} appoint={item} />
              ))}
          </tbody>
        </table>
      ) : (
        <h1 className="font-[800] text-[1.4rem]">No Appointments</h1>
      )}

      {isLoading && <ClipLoader size={28} color="blue" />}

      {isError && <h1>{error.message}</h1>}
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
      <td>{appoint.appointmentDate}</td>
    </tr>
  );
};

export default Appointments;
