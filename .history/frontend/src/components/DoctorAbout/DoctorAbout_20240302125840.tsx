import doctors, { Doctor, Education } from "../../assets/data/doctors";

const DoctorAbout: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="text-textColor">
      <div className="flex flex-col gap-[2rem] ">
        <h2 className="font-[800] text-[1.4rem] tracking-wide">
          About of{" "}
          <span className="text-irisBlueColor ml-1">{doctor.name}</span>
        </h2>

        <p className="text-justify leading-7 tracking-wide">{doctor.about}</p>
      </div>

      <div className=""></div>
    </div>
  );
};

const EducationDiv: React.FC<{ education: Education }> = ({ education }) => {
  <div>
    <div>
      <h3>
        {education.from} to {education.to}
      </h3>
    </div>
    <div>
      <p>{education.degree}</p>
      <p>{education.place}</p>
    </div>
  </div>;
};
export default DoctorAbout;
