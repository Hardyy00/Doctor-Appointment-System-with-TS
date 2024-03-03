import { Doctor } from "../../assets/data/doctors";

const BookDoctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="px-[1rem] w-[22rem] h-[22rem] py-[1rem]">
      <div className="flex items-center justify-between">
        <h2 className="text-textColor text-[1.1rem]">Ticket Price</h2>
        <p className="font-[600] text-[1.2rem]">
          {doctor.ticketPrice}&nbsp; &nbsp; RS
        </p>
      </div>
    </div>
  );
};

export default BookDoctor;
