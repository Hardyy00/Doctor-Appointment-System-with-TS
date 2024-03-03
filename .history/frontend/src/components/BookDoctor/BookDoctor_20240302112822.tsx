import { Doctor } from "../../assets/data/doctors";

const BookDoctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="px-[1rem] w-[22rem] h-auto">
      <div className="flex">
        <h2>Ticket Price</h2>
        <p>{doctor.ticketPrice}</p>
      </div>
    </div>
  );
};

export default BookDoctor;
