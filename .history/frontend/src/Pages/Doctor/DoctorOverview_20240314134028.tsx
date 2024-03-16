import DoctorAbout from "../../components/DoctorAbout/DoctorAbout";
import Rating from "@mui/material/Rating";
import { useSelectorTyped } from "../../hooks/hooks";
import { Doctor } from "../../assets/data/doctors";

const DoctorOverview = () => {
  const doctor: Doctor = useSelectorTyped((state) => state.user as Doctor);
  return (
    <div className="flex flex-col w-full gap-[2rem]">
      <div className="w-full flex gap-4">
        <div className="h-[10rem]  w-[10rem] rounded-md overflow-hidden">
          <img
            src={doctor.image}
            alt="profile pic"
            className="object-cover h-full w-full"
          />
        </div>

        <div className="flex flex-col gap-[0.5rem] items-start justify-start">
          <p className="p-[0.8rem] text-irisBlueColor font-[800] bg-teal-200/60 rounded-lg w-[50%]">
            {doctor.specialization}
          </p>
          <h1 className="font-[800] text-[1.1rem]">{doctor.name}</h1>
          <div className="flex items-center justify-start">
            <Rating value={doctor.averageRating} precision={0.2} readOnly />
            <p>{doctor.averageRating}</p>
          </div>

          <p className="align-bottom">{doctor.hospital}</p>
        </div>
      </div>

      <DoctorAbout doctor={doctor} />

      <div></div>

      <div></div>
    </div>
  );
};

export default DoctorOverview;
