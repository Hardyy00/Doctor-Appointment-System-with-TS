import { Doctor, Education, Experience } from "../../assets/data/doctors";

const DoctorAbout: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="text-textColor flex flex-col gap-8">
      {/* about */}
      <div className="flex flex-col gap-[2rem] ">
        <h2 className="font-[800] text-[1.4rem] tracking-wide">
          About of
          <span className="text-irisBlueColor ml-1">{doctor.name}</span>
        </h2>

        <p className="text-justify leading-7 tracking-wide">{doctor.about}</p>
      </div>

      {/* education */}
      <div z>
        <h2 className="font-[800] text-[1.4rem] tracking-wide">Education</h2>

        <div className="w-full flex flex-col gap-[1rem] mt-[1rem] pl-4">
          {doctor.education?.map((item) => (
            <EducationDiv education={item} />
          ))}
        </div>
      </div>

      {/* Experience */}

      <div>
        <h2 className="font-[800] text-[1.4rem] tracking-wide">Experience</h2>

        <div className="w-full">{doctor.experience?.map((item)=>)}</div>
      </div>
    </div>
  );
};

const EducationDiv: React.FC<{ education: Education }> = ({ education }) => {
  console.log(education);
  return (
    <div className="w-full flex flex-col">
      <h3 className="text-irisBlueColor text-[1.1rem] font-[600]">
        {education.from} to {education.to}
      </h3>

      <div className="flex items-center justify-between">
        <p className="font-[500]">{education.degree}</p>
        <p>{education.place}</p>
      </div>
    </div>
  );
};

const ExperienceDiv: React.FC<{experience : Experience}> = ({experience})=>{

  return <div className="flex flex-col gap-4">

<h3 className="text-irisBlueColor text-[1.1rem] font-[600]">
        {education.from} to {education.to}
      </h3>
  </div>
}
export default DoctorAbout;