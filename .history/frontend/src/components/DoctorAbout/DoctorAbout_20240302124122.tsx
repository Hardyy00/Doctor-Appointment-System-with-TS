import { Doctor } from "../../assets/data/doctors";

const DoctorAbout: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div>
      <div>
        <h2 className="font-[800] text-[1.4rem] tracking-wide">
          About of{" "}
          <span className="text-irisBlueColor ml-1">{doctor.name}</span>
        </h2>
      </div>
    </div>
  );
};

export default DoctorAbout;
