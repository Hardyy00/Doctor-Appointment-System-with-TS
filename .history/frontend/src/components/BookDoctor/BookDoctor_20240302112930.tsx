import { Doctor } from "../../assets/data/doctors";

const BookDoctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="px-[1rem] w-[22rem] h-[22rem] py-[1rem]">
      <div className="flex items-center justify-between">
        <h2 className="text-textColor">Ticket Price</h2>
        <p>{doctor.ticketPrice}</p>
      </div>
    </div>
  );
};

export default BookDoctor;
