import doctors, { Doctor, Education } from "../../assets/data/doctors";

const DoctorAbout: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="text-textColor">
      <div className="flex flex-col gap-[2rem] ">
        <h2 className="font-[800] text-[1.4rem] tracking-wide">
          About of
          <span className="text-irisBlueColor ml-1">{doctor.name}</span>
        </h2>

        <p className="text-justify leading-7 tracking-wide">{doctor.about}</p>
      </div>

      <div className="">
        <h2 className="font-[800] text-[1.4rem] tracking-wide">Education</h2>

        <div className="w-full">
          {doctor.education?.map((item) => (
            <EducationDiv education={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const EducationDiv: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <div className="w-full">
      <h3>
        {education.from} to {education.to}
      </h3>

      <div className="flex items-center justify-center">
        <p>{education.degree}</p>
        <p>{education.place}</p>
      </div>
    </div>
  );
};
export default DoctorAbout;