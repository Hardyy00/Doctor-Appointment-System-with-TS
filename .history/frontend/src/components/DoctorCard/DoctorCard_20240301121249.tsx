import { Link } from "react-router-dom";
import { Doctor } from "../../assets/data/doctors";

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="flex flex-col gap-[1rem] text-left border-black border-2">
      <div className="">
        <img src={doctor.image} alt="" />
      </div>

      <h2 className="font-[800] text-[1.4rem]">{doctor.name}</h2>
      <div className="flex items-center justify-between">
        <p className="p-[1rem]">{doctor.specialization}</p>

        <div className="flex">
          <img src="" alt="" />
          <p>{doctor.averageRating}</p>
        </div>

        <div className="flex">
          <p>{doctor.hospital}</p>

          <Link
            to=""
            className="w-[3rem] h-[3rem] rounded-[50%] flex items-center justify-center border-2 border-black"
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
