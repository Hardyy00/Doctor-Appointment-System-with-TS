import { Link } from "react-router-dom";
import { Doctor } from "../../assets/data/doctors";
import { FaArrowRight } from "react-icons/fa";

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="flex flex-col gap-[0.8rem] text-left">
      <div className="w-full">
        <img src={doctor.image} alt="" className="w-full" />
      </div>

      <h2 className="font-[800] text-[1.4rem]">{doctor.name}</h2>
      <div className="flex items-center justify-between ">
        <p className="p-[1rem] text-irisBlueColor font-[600]">
          {doctor.specialization}
        </p>

        <div className="flex mr-3">
          <img src="" alt="" />
          <p>{doctor.averageRating}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>{doctor.hospital}</p>

        <Link
          to=""
          className="w-[2.4rem] h-[2.4rem] rounded-[50%] flex items-center justify-center border-2 border-black"
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
