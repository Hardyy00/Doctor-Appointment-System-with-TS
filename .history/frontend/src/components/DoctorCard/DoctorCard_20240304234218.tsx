import { Link } from "react-router-dom";
import { Doctor } from "../../assets/data/doctors";
import { FaArrowRight } from "react-icons/fa";
import Star from "../../assets/images/Star.png";

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="flex flex-col gap-[0.5rem] text-left max-w-[90%]">
      <div className="w-full h-[16rem]">
        <img src={doctor.image} alt="" className="object-cover h-full" />
      </div>

      <h2 className="font-[800] text-[1.4rem]">{doctor.name}</h2>
      <div className="flex items-center justify-between ">
        <p className="p-[1rem] text-irisBlueColor font-[800] bg-teal-200 rounded-lg">
          {doctor.specialization}
        </p>

        <div className="flex mr-3 items-center">
          <img src={Star} alt="" className="h-4 mr-2" />
          <p>{doctor.averageRating}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p>{doctor.hospital}</p>

        <Link
          to={`/doctor/${doctor.id}`}
          className="w-[2.4rem] h-[2.4rem] rounded-[50%] flex items-center justify-center border-2 border-black"
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
