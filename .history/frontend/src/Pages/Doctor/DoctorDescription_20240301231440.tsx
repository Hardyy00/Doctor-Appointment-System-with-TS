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
  return <div>DoctorDescription</div>;
};

export default DoctorDescription;
