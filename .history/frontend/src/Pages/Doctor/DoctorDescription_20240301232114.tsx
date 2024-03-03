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
    <section className="flex w-full  px-[2rem] py-[3rem] h-[92vh]">
      <div className="w-[60%] border-black border-2">
        <div className="">
          <div className="h-[18rem]">
            <img src={doctor.image} alt="" className="object-cover h-full" />
          </div>
          <div>
            <p></p>
            <h1></h1>
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
