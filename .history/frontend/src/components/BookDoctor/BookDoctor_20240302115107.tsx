import { Doctor } from "../../assets/data/doctors";

const BookDoctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="px-[1rem] w-[22rem] py-[1rem] h-auto box-decoration-slice border-2 border-black flex flex-col gap-[2rem]">
      <div className="flex items-center justify-between">
        <h2 className="text-textColor text-[1.2rem]">Ticket Price</h2>
        <p className="font-[600] text-[1.2rem] text-red-500">
          {doctor.ticketPrice}&nbsp; &nbsp; RS
        </p>
      </div>

      <h3>Available Time slots :</h3>

      {doctor.timeSlots?.map((item) => {
        return <div className=""></div>;
      })}
    </div>
  );
};

const;
export default BookDoctor;
