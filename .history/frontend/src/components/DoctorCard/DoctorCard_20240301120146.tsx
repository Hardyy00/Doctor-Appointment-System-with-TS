import { Doctor } from "../../assets/data/doctors";

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <img src={doctor.image} alt="" />
      </div>

      <h2>{doctor.name}</h2>
      <div>
        <p>{doctor.specialization}</p>

        <div className="flex">
          <img src="" alt="" />
          <p>{doctor.averageRating}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
