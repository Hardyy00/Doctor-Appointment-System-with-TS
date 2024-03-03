import doctorImg01 from "../../assets/images/doctor-img01.png";
import { Doctor } from "../../assets/data/doctors";

const DoctorDescription: React.FC = () => {
  const doctor: Doctor = {
    id: "01",
    name: "Dr. Alfaz Ahmed",
    specialization: "Surgeon",
    averageRating: 4.8,
    totalRating: 272,
    image: doctorImg01,
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  };
  return (
    <section className="flex w-full max-md:flex-col  px-[2rem] py-[3rem] h-[92vh]">
      <div className="w-[60%] border-black border-2 px-[6rem]">
        <div className="flex items-center justify-start gap-[1rem]">
          <div className="h-[14rem]">
            <img src={doctor.image} alt="" className="object-cover h-full" />
          </div>
          <div className="flex flex-col">
            <p className="p-[1rem] text-irisBlueColor font-[800] bg-teal-200 rounded-lg">
              {doctor.specialization}
            </p>
            <h1 className="font-[800] text-[1.4rem]">{doctor.name}</h1>
            <div>
              <img src="" alt="" />
              <p></p>
            </div>

            <p></p>
          </div>
        </div>
      </div>
      <div className="w-[40%] border-black border-2">
        <div className=""></div>
      </div>
    </section>
  );
};

export default DoctorDescription;
