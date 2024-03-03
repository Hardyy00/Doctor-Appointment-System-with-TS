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
    <section className="flex w-full px-[2rem] py-[3rem]">
      <div className="w-[60%] border-black border-2"></div>
      <div>
        <div></div>
      </div>
    </section>
  );
};

export default DoctorDescription;
