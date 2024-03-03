import { Doctor, TimeSlot } from "../../assets/data/doctors";

const BookDoctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="px-[1rem] w-[22rem] py-[1rem] h-auto box-decoration-slice border-2 border-black flex flex-col gap-[2rem]">
      <div className="flex items-center justify-between">
        <h2 className="text-textColor text-[1.2rem]">Ticket Price</h2>
        <p className="font-[600] text-[1.2rem] text-red-500">
          {doctor.ticketPrice}&nbsp; &nbsp; RS
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h3>Available Time slots :</h3>

        <div className="flex flex-col w-full">
          {doctor.timeSlots?.map((item) => {
            return <Slot key={doctor.id} slot={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Slot: React.FC<{ slot: TimeSlot }> = ({ slot }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h3>{slot.day}</h3>
      <p>{slot.time}</p>
    </div>
  );
};
export default BookDoctor;
