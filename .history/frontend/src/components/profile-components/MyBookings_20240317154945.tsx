import { useQuery } from "@tanstack/react-query";
import { User } from "../../assets/data/doctors";
import DoctorCard from "../DoctorCard/DoctorCard";
import { useSelectorTyped } from "../../hooks/hooks";
import { getAppointments } from "../../util/http";

const MyBookings: React.FC<{ user: User }> = ({ user }) => {
  const userID: string = useSelectorTyped((state) => state.user?._id as string);
  const role: string | undefined | null = useSelectorTyped(
    (state) => state.user?.role
  );
  const { data, isLoading } = useQuery({
    queryKey: ["user", "appointments", userId],
    queryFn: ({ signal }) => getAppointments({ signal, id: userID, role }),
  });
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-[800] text-[1.4rem]">My Appointments</h1>

      <div className="max-w-[90%] grid grid-cols-2 gap-[2rem] place-items-center">
        {user.appointments?.map((item) => (
          <DoctorCard doctor={item.doctor!} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
