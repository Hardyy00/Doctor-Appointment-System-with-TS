import DoctorDescription from "./DoctorDescription";
import { doctor } from "./DoctorDescription";

const DoctorOverview = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex">
        <div className="h-[16rem]">
          <img src={doctor.image} alt="" className="object-cover h-full" />
        </div>

        <div></div>
      </div>

      <div></div>

      <div></div>

      <div></div>
    </div>
  );
};

export default DoctorOverview;
