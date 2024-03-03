import { Doctor } from "../../assets/data/doctors";

const DoctorFeedback: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="w-full">
      <h2>Reviews ({doctor.reviews?.length})</h2>
    </div>
  );
};

export default DoctorFeedback;
