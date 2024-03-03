import { Doctor } from "../../assets/data/doctors";

const DoctorAbout: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div>
      <div className="flex flex-col gap-[2rem] text-textColor">
        <h2 className="font-[800] text-[1.4rem] tracking-wide">
          About of{" "}
          <span className="text-irisBlueColor ml-1">{doctor.name}</span>
        </h2>

        <p className="text-justify leading-7 tracking-wide">{doctor.about}</p>
      </div>
    </div>
  );
};

export default DoctorAbout;
