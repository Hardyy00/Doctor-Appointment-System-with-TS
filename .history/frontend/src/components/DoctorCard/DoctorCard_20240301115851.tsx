import { Doctor } from "../../assets/data/doctors";

const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor: Doctor }) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <img src="" alt="" />
      </div>

      <h2></h2>
      <div>
        <p>{d}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
