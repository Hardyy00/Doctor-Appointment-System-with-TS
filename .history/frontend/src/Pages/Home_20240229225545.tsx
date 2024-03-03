import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { FaArrowRight } from "react-icons/fa";
import Location from "../assets/images/loc.svg";
import Question from "../assets/images/question.svg";
import Meet from "../assets/images/meet.svg";
import DoctorData from "../assets/data/doctors.ts";

const Home: React.FC = () => {
  return (
    <section className="p-0 w-full">
      <Hero />

      {/* cards */}
      <section className="flex flex-col w-full px-[6rem] py-[8rem] items-center justify-center gap-[1rem] text-center">
        <h1 className="text-[2.4rem] font-[800] w-[22rem] text-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Providing the best medical Services
        </h1>
        <p className="md:w-[28rem] text-textColor w-[22rem]">
          World-clas care for everyone. Our health System offers unmatched,
          expert health care.
        </p>

        <div className="card_row flex max-md:flex-col mt-[5rem] w-full justify-between max-md:items-center max-md:gap-[3rem]">
          <div className="card">
            <div className="h-[50%] w-full">
              <img
                src={Location}
                alt="Location icon"
                className="object-cover h-full m-auto"
              />
            </div>
            <h2 className="font-[800] text-[1.4rem]">Find a Location</h2>

            <p className="text-textColor">
              World-class care for everyone. Our health System offers unmatched,
              expert health care . From the lab to the clinic.
            </p>

            <Link
              to=""
              className="w-[3rem] h-[3rem] rounded-[50%] flex items-center justify-center border-2 border-black"
            >
              <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <div className="h-[50%] w-full">
              <img
                src={Question}
                alt="Question icon"
                className="object-cover h-full m-auto"
              />
            </div>

            <h2 className="font-[800] text-[1.4rem]">Find a Doctor</h2>
            <p className="text-textColor">
              World-Class care for everyone. Our health System offers unmatched,
              expert health care. From the lab to the clinic.
            </p>
            <Link
              to="/doctor-search"
              className="w-[3rem] h-[3rem] rounded-[50%] flex items-center justify-center border-2 border-black"
            >
              <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <div className="h-[50%] w-full">
              <img src={Meet} alt="" className="object-cover h-full m-auto" />
            </div>

            <h2 className="font-[800] text-[1.4rem]">Book Appointment</h2>
            <p className="text-textColor">
              World-class care for everyone. Our health System offers unmatched,
              expert health care . From the lab to the clinic.
            </p>
            <Link
              to=""
              className="w-[3rem] h-[3rem] rounded-[50%] flex items-center justify-center border-2 border-black"
            >
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/*  our doctors section */}
      <section id="show doctors" className="">
        <h1></h1>

        <p></p>

        <div className="flex max-md:flex-col mt-[5rem] w-full justify-between max-md:items-center max-md:gap-[3rem]">
          {DoctorData.map((item) => (
            <p>item.name</p>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
