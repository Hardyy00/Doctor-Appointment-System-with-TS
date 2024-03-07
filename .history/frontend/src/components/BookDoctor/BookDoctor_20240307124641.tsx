import { Doctor, TimeSlot } from "../../assets/data/doctors";

const BookDoctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="px-[1rem] w-[22rem] py-[2rem] h-auto box-decoration-slice text-textColor flex flex-col gap-[2rem] bg-white shadow-xl rounded-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-textColor text-[1.2rem] font-[600]">
          Ticket Price
        </h2>
        <p className="font-[800] text-[1.2rem] text-red-500">
          {doctor.ticketPrice}&nbsp; RS
        </p>
      </div>

      <div className="flex flex-col items-start justify-between gap-[1rem]">
        <h3 className="font-[600]">Available Time slots :</h3>

        <div className="flex flex-col w-full gap-[1rem]">
          {doctor.timeSlots?.map((item) => {
            return <Slot slot={item} />;
          })}
        </div>
      </div>

      <button className="btn p-[1rem] rounded-md">Book Appointment</button>
    </div>
  );
};

const Slot: React.FC<{ slot: TimeSlot }> = ({ slot }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h3 className="font-[500]">{slot.day} :</h3>
      <p>
        {slot.startingTime} - {slot.endingTime}
      </p>
    </div>
  );
};
export default BookDoctor;
