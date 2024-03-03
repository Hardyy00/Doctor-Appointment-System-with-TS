import { Doctor } from "../../assets/data/doctors";

const BookDoctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div>
      <div>
        <h2>Ticket Price</h2>
        <strong>{doctor.ticketPrice}</strong>
      </div>
    </div>
  );
};

export default BookDoctor;
