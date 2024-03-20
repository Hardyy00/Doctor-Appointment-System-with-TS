import axios from "axios";
import { Doctor, TimeSlot, User } from "../../assets/data/doctors";
import useRazorpay from "react-razorpay";
import { useSelectorTyped } from "../../hooks/hooks";
import { useState } from "react";
import Modal from "../../ui/Modal";
import Card from "../../ui/Card";

const BookDoctor: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [RazorPay] = useRazorpay();

  const [open, setOpen] = useState<boolean>(false);

  const user: User = useSelectorTyped((state) => state.user as User);
  const doctorBookHandler = async () => {
    setOpen(true);
    // const ticketPrice: number = doctor.ticketPrice!;

    // const uri = import.meta.env.VITE_BASE_URI + "/api";
    // const {
    //   data: { key },
    // } = await axios.get(uri + "/getKey");

    // const {
    //   data: { order },
    // } = await axios.post(uri + "/checkout", {
    //   ticketPrice,
    // });

    // const options = {
    //   key: key,
    //   amount: order.amount,
    //   currency: "INR",
    //   name: "Doctor Appointment System",
    //   description: "Booking Transaction",
    //   image:
    //     "https://img.freepik.com/premium-vector/happy-female-doctor-is-talking-explaining-something-gesturing-with-hand-n_697837-552.jpg?size=626&ext=jpg&ga=GA1.1.683393628.1705247614&semt=ais",
    //   order_id: order.id,
    //   callback_url: uri + "/verifyPayment",
    //   prefill: {
    //     userId: user._id,
    //     name: user.name, //your customer's name
    //     email: user.email,
    //     contact: user.phone + "", //Provide the customer's phone number for better conversion rates
    //   },
    //   notes: {
    //     doctor: doctor.name,
    //     doctorId: doctor._id,
    //   },
    //   theme: {
    //     color: "#3399cc",
    //   },
    // };

    // const razorPay = new RazorPay(options);
    // razorPay.open();
    // razorPay.on("payment.success", (response) => {
    //   console.log(response);
    // });
  };
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

      <Modal open={open} onClose={() => setOpen(false)}>
        <Card className="">
          <h1 className="">Hello</h1>
        </Card>
      </Modal>
      <div className="flex flex-col items-start justify-between gap-[1rem]">
        <h3 className="font-[600]">Available Time slots :</h3>

        <div className="flex flex-col w-full gap-[1rem]">
          {doctor.timeSlots?.map((item) => {
            return <Slot slot={item} />;
          })}
        </div>
      </div>

      <button className="btn p-[1rem] rounded-md" onClick={doctorBookHandler}>
        Book Appointment
      </button>
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
