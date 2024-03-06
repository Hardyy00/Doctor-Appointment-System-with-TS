import { doctor } from "./DoctorDescription";

const DoctorOverview = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex">
        <div className="h-[10rem] rounded-md overflow-hidden">
          <img src={doctor.image} alt="" className="object-cover h-full" />
        </div>

        <div className="flex flex-col gap-[0.7rem] items-start justify-start">
            <p className="p-[1rem] text-irisBlueColor font-[800] bg-teal-200/60 rounded-lg w-[50%]">
              {doctor.specialization}
            </p>
            <h1 className="font-[800] text-[1.2rem]">{doctor.name}</h1>
            <div className="flex items-center justify-start">
              {/* <img src={Star} alt="" /> */}
              <p>{doctor.averageRating}</p>
            </div>

            <p className="align-bottom">{doctor.hospital}</p>
      </div>

      <div></div>

      <div></div>

      <div></div>
    </div>
  );
};

export default DoctorOverview;
