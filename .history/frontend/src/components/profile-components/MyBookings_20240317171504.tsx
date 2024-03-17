import { useQuery } from "@tanstack/react-query";
import DoctorCard from "../DoctorCard/DoctorCard";
import { useSelectorTyped } from "../../hooks/hooks";
import { getAppointments } from "../../util/http";
import { ClipLoader } from "react-spinners";

const MyBookings: React.FC = () => {
  const userId: string = useSelectorTyped((state) => state.user?._id as string);
  const role: string | undefined | null = useSelectorTyped(
    (state) => state.user?.role
  );
  const { data: appointments, isLoading } = useQuery({
    queryKey: ["user", "appointments", userId],
    queryFn: ({ signal }) => getAppointments({ signal, id: userId, role }),
  });
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-[800] text-[1.4rem]">My Appointments</h1>

      {isLoading && <ClipLoader size={28} color="blue" />}
      {!isLoading && (
        <div className="max-w-[90%] grid grid-cols-2 gap-[1.5rem] place-items-center">
          {appointments?.map((item) => (
            <DoctorCard doctor={item.doctor!} key={item._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
